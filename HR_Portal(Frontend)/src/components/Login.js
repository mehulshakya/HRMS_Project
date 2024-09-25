
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8082/api/auth/signin', {
        username: username,
        password: password
      });

      console.log('Login successful:', response.data);
      localStorage.setItem('token', JSON.stringify(response));

      setIsAuthenticated(true);
      navigate('/home');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed: Invalid username or password');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="h-100"> {/* Ensure the row takes full height */}
        <MDBCol sm='6' className='d-flex flex-column justify-content-center px-0'> {/* Left side for login */}
          <div className='w-75 mx-auto pt-4'> {/* Center the form horizontally */}
            <h1 className="fw-bold mb-3 text-center" style={{ letterSpacing: '1px' }}>HRMS Portal</h1> {/* Header added */}

            {/* Adjust margin to move login section upwards */}
            <div className="mb-4" style={{ marginTop: '20px' }}>
              <h3 className="fw-normal mb-3 text-center">Log in</h3>

              <form onSubmit={handleSubmit}>
                <MDBInput 
                  wrapperClass='mb-4 w-100' 
                  label='Username' 
                  id='formControlLg' 
                  type='text' 
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                  required 
                />
                <MDBInput 
                  wrapperClass='mb-4 w-100' 
                  label='Password' 
                  id='formControlLg' 
                  type='password' 
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <MDBBtn className="mb-4 w-100" color='info' size='lg' type="submit">
                  Login
                </MDBBtn>
              </form>
            </div>

          </div>
        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'> {/* Right side for image */}
          <img
            src={`${process.env.PUBLIC_URL}/images/background.jpg`} // Path to your image
            alt="Login image"
            className="w-100 h-150"
            style={{
              objectFit: 'cover', // Cover the area
              objectPosition: 'center', // Center the image
              height: '100vh', // Set the height to 100% of the viewport height
              width: '100%', // Set the width to 100%
            }}
          />
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
};

export default Login;