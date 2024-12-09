const express = require('express');
const path = require('path');

console.log('Starting server...');

// Debugging logs to verify file paths
console.log('Current directory:', __dirname);
console.log('Looking for:', path.join(__dirname, './controllers/bookController'));

const { searchBooks, getFavorites, addFavorite } = require('./controllers/bookController'); // Ensure this file exists

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Routes
app.get('/search', searchBooks);
app.get('/favorites', getFavorites);
app.post('/favorites', addFavorite);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});