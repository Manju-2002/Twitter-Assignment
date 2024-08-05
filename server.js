const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); 

require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Exit the process with failure
  }
};

// Call connectDB function to connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example of additional routes
// User registration route
app.post('/api/users/register', (req, res) => {
  // Handle user registration
  res.send('User registration endpoint');
});

// User login route
app.post('/api/users/login', (req, res) => {
  // Handle user login
  res.send('User login endpoint');
});

// Post a tweet route
app.post('/api/tweets', (req, res) => {
  // Handle posting a tweet
  res.send('Post a tweet endpoint');
});

// Fetch user timeline route
app.get('/api/users/:userId/timeline', (req, res) => {
  // Handle fetching user timeline
  res.send(`User timeline for user ID: ${req.params.userId}`);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
