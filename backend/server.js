const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const menuRoutes = require('./routes/menuRoutes');  // Import menu routes

dotenv.config();  // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Use the menu routes with the correct path
app.use('/api/menu', menuRoutes);  // Mount routes for /api/menu

// Connect to MongoDB using the connection string from the .env file
mongoose
  .connect(process.env.MONGODB_URI)  // Connect using the .env connection string
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server on the specified port
const port = process.env.PORT || 5000;  // Ensure using environment variable for port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
