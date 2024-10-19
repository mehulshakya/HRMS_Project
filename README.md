# Human Resources Management System

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
3. Run the Application
To run the Spring Boot application:

mvn spring-boot:run
Alternatively, you can run the application directly from your IDE (e.g., Eclipse/IntelliJ) as a Java application.

Usage

Access the Application
Frontend: Open your browser and go to http://localhost:3000 to access the application (after setting up both the backend and frontend).
Backend: The backend will be running at http://localhost:8082. Use Postman to test the API endpoints. Make sure to add data to your database before testing. You can refer to the controller classes to understand how to populate the tables.
Database Setup
Open MySQL Workbench and create the necessary database.
Ensure your MySQL credentials (username and password) are correctly configured in the application.properties file in your Java project (in Eclipse/IntelliJ).

Frontend Setup
Install the required Node.js packages by running the following commands:

npm install
npm install axios bootstrap react-router-dom
Start the frontend server:

npm start
Notes

Ensure the backend is running before accessing the frontend.
If you're facing any issues with the database or configuration, double-check the application.properties file and the MySQL setup in Workbench.
