// app.js
const express = require('express');
const app = express();
require("dotenv").config();
const mongodb = require('../backend/Config/db');
const userRoute = require('./Routes/userRoutes'); // Make sure this import is correct
const cors = require('cors');
const cookieParser = require("cookie-parser");

// Connect to MongoDB
mongodb();

// Set up CORS and cookie parsing middleware
app.use(cors({
  origin: "http://localhost:5500",
  credentials: true
}));
app.use(cookieParser());

// Parse JSON and URL-encoded data with options
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- Add the options object

// Set up user routes
app.use("/", userRoute); // Make sure the path is correct here

module.exports = app;
