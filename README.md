# Todo-Mongo-JWT

A simple To-Do application with JWT authentication, built using Node.js, Express, MongoDB, and EJS.

## Features
- User Registration and Login
- JWT-based Authentication
- CRUD operations for To-Do items
- Responsive UI using EJS


### Client Mode: 
```bash 
https://todo-mongo-jwt.vercel.app/
``` 

### Developer mode

## Prerequisites
- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rifat-Shariar-Sakil-24/Todo-Mongo-JWT.git
   cd Todo-Mongo-JWT
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash 
   Create a .env file in the root directory and add the following:
   DBNAME=<your_mongoDB_cluster_name>
   DBPASS=<cluster_password>
   SECRET=<secret_key_for_password_encryption>
   ```
  

4. Start the server:
   ```bash
   npm start
   ```