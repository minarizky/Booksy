const express = require('express');
const { searchBooks, getFavorites, addFavorite } = require('../controllers/bookController');
const router = express.Router();

router.get('/search', searchBooks);
router.get('/favorites', getFavorites);
router.post('/favorites', addFavorite);

module.exports = router;