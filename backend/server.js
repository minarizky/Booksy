const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/books');
const favoritesRoutes = require('./routes/favorites');
const doneReadingRoutes = require('./routes/doneReading');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Debugging imports
console.log('Books Routes:', booksRoutes);
console.log('Favorites Routes:', favoritesRoutes);
console.log('Done Reading Routes:', doneReadingRoutes);
console.log('Error Handler:', typeof errorHandler);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Booksy Backend API!');
});

// API routes
app.use('/api/books', booksRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/done-reading', doneReadingRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});