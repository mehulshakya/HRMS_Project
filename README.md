# HRMS (Human Resources Management System)

## Application Overview

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img width="90%" alt="login" src="https://github.com/user-attachments/assets/87a39a1f-3ec7-406d-ae02-6861454ef4bc">
  <img width="90%" alt="home" src="https://github.com/user-attachments/assets/e2213f6e-6d75-4662-bd72-048af72907e2">

  <img width="45%" alt="EmpList" src="https://github.com/user-attachments/assets/eb809e48-7a5a-4319-818a-2b6b915e7356">
  <img width="45%" alt="AddEmp" src="https://github.com/user-attachments/assets/1979eca6-8c76-4b8e-b45a-d5fdb91ec005">

  <img width="45%" alt="ProjectList" src="https://github.com/user-attachments/assets/662a2cb7-d5ef-4f04-9399-ca2171b1cebb">
  <img width="45%" alt="AddProject" src="https://github.com/user-attachments/assets/40a9b1fd-98f1-4a0e-9803-2da79d7a2164">

  <img width="45%" alt="HrList" src="https://github.com/user-attachments/assets/2b175f19-e8e8-4d5f-973e-edf421204829">
  <img width="45%" alt="CandidateList" src="https://github.com/user-attachments/assets/8133e433-ac01-4e36-8657-42d29f7b1306">
  <img width="45%" alt="AddCandidate" src="https://github.com/user-attachments/assets/f1a172b4-76c0-47d8-8feb-9240827bfe20">

  <img width="90%" alt="HrLogin" src="https://github.com/user-attachments/assets/b6d09d98-36ba-41fd-a1e7-8771f18547d3">
</div>

### HR Role-Based Access Control

- The last snapshot represents the **HR login** screen, where role-based access has been implemented using **JWT tokenization**. 
- Once logged in with an HR role, certain restricted tabs will no longer be accessible. The system ensures that HR users only have access to specific functionalities, enhancing security.








## Prerequisites

Before starting, ensure you have the following installed on your system:

- **Java JDK**: Install the latest LTS version of JDK (For this project, Java 21 is used).
- **Maven**: Ensure Maven is installed to build the project.
- **VS Code**: For frontend development.
- **MySQL Workbench**: To manage your database.
- **Node.js**: Required for running the frontend.
- **Postman**: For testing API endpoints.

## Setup Instructions

### 1. Clone the Repository

git clone {repo-url}
cd {repo-folder}

### 2. Build the Project
To build the project, open the terminal and run:

mvn clean install
### 3. Run the Application
To run the Spring Boot application:

mvn spring-boot:run
Alternatively, you can run the application directly from your IDE (e.g., Eclipse/IntelliJ) as a Java application.

## Usage

### Access the Application

- **Frontend**: 
  - Open your browser and go to `http://localhost:3000` to access the application (after setting up both the backend and frontend).
  
- **Backend**: 
  - The backend will be running at `http://localhost:8082`.
  - Use **Postman** to test the API endpoints. 
  - Ensure that data is added to the database before testing. You can refer to the controller classes for instructions on populating the tables.

### Database Setup

1. Open **MySQL Workbench** and create the necessary database.
2. Ensure your MySQL credentials (username and password) are correctly configured in the `application.properties` file in your Java project (in Eclipse/IntelliJ).

### Frontend Setup

1. Install the required Node.js packages by running the following commands:
   ```bash
   npm install
   npm install axios bootstrap react-router-dom

2. Start the frontend server:
  ```bash
  npm start
```
Notes

Ensure that the backend is running before accessing the frontend.
If you encounter any issues with the database or configuration, double-check the application.properties file and the MySQL setup in Workbench.
