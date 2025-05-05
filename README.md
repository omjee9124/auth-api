# Auth API

This is a simple authentication API built with **Node.js**, **Express**, **MySQL**, **bcrypt**, and **jsonwebtoken** (JWT). The API allows users to register, log in, and manage authentication securely.

## 🚀 **Features**
- **User Registration**: Register a new user with a username, email, and password.
- **User Login**: Log in with a username/email and password to receive a JWT token.
- **Password Hashing**: Passwords are hashed with bcrypt for secure storage.
- **JWT Authentication**: Use JWT for user authentication and protected routes.
- **MySQL Database**: All user data is stored in a MySQL database.

## 💻 **Tech Stack**
- **Node.js**
- **Express.js**
- **MySQL**
- **bcrypt** (Password hashing)
- **jsonwebtoken** (JWT for authentication)
- **dotenv** (Environment variable management)

## 🛠 **Installation**
1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/omjee9124/auth-api.git
    cd auth-api
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=root
    DB_NAME=auth_api
    JWT_SECRET=your_secret_key
    JWT_EXPIRES_IN=1h
    ```

4. **Start the MySQL database** and create the necessary tables:
    - Log in to MySQL:
        ```bash
        mysql -u root -p
        ```
    - Run the SQL script to create the `auth_api` database and users table.

5. Run the application:
    ```bash
    node app.js
    ```

6. The server will be running at `http://localhost:3000`.

## 📚 **API Endpoints**

### `POST /register`
- **Description**: Registers a new user with the provided `username`, `email`, and `password`.
- **Request Body**:
    ```json
    {
      "username": "exampleuser",
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```

### `POST /login`
- **Description**: Logs in a user and returns a JWT token.
- **Request Body**:
    ```json
    {
      "username": "exampleuser",
      "password": "securepassword"
    }
    ```
- **Response**:
    ```json
    {
      "token": "jwt_token_here"
    }
    ```

### `GET /profile`
- **Description**: Retrieves the user's profile. This endpoint is protected and requires a valid JWT token in the `Authorization` header.

## 🔐 **Security**
- **Password Hashing**: User passwords are securely hashed using bcrypt.
- **JWT Authentication**: Authentication is handled using JWT, ensuring secure sessions for logged-in users.

## 📂 **Directory Structure**
