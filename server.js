// server.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // replace with your database user
  password: '',     // replace with your database password
  database: 'telemedicine_app',  // replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected!');
  }
});

// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome to the Telemedicine Backend API');
});

// Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
