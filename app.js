require('dotenv').config();
const express = require('express');
const connectDB = require('./utils/db');
const authRoutes = require('./routes/authRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use('/api/users', authRoutes);
app.use('/api/tweets', tweetRoutes);

module.exports = app;
