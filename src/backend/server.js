const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Connect to your local MongoDB database
mongoose.connect('mongodb://localhost:27017/codeflow', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to local MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to local MongoDB:', err);
  });

// Define your API routes for CRUD operations
// For example, you can define routes for creating, reading, updating, and deleting data in your MongoDB database.

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});