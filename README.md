# JWT Authentication & Task Management

## Project Overview
This project is a full-stack web application built using React, Node.js, Express.js, MongoDB, JWT Authentication, and Swagger API documentation.

Users can:
- Register a new account
- Login using JWT authentication
- Add tasks
- View all tasks
- Delete tasks
- Access API documentation using Swagger

## Technologies Used

### Frontend
- React.js
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Swagger UI

## Features

- User Registration
- User Login
- JWT Authentication
- Task Management
- Add Task
- View Tasks
- Delete Task
- REST API
- Swagger Documentation

## API Endpoints

### Authentication
- POST /signup
- POST /login

### Tasks
- GET /tasks
- POST /tasks
- DELETE /tasks/:id

## Installation

### Clone Repository

```bash
git clone <repository-link>
```

### Install Backend

```bash
cd backend
npm install
npm start
```

### Install Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder.

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Swagger

Open the following URL after starting the backend:

```
http://localhost:5000/api-docs
```

## Author

Diksha Sharma
