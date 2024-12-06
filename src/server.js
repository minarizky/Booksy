const express = require('express');
const { searchBooks, getFavorites, addFavorite } = require('./controllers/bookController');

const app = express();

// Use PORT from environment or default to 3000
const PORT = process.env.PORT || 3000;

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