const axios = require('axios');
const { pool } = require('../database');

const searchBooks = async (req, res) => {
  try {
    const { query } = req.query;
    console.log(`Searching for books with query: ${query}`);
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    res.json(response.data.docs);
  } catch (error) {
    console.error('Error fetching books from API:', error.message);
    res.status(500).json({ error: 'Failed to fetch books from API' });
  }
};

const getFavorites = async (req, res) => {
  try {
    console.log('Fetching favorite books from the database.');
    const result = await pool.query('SELECT * FROM favorites');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching favorite books:', error.message);
    res.status(500).json({ error: 'Failed to fetch favorite books' });
  }
};

const addFavorite = async (req, res) => {
  try {
    const { title, author, cover } = req.body;
    console.log('Adding book to favorites:', { title, author, cover });
    await pool.query('INSERT INTO favorites (title, author, cover) VALUES ($1, $2, $3)', [title, author, cover]);
    res.status(201).json({ message: 'Book added to favorites' });
  } catch (error) {
    console.error('Error adding book to favorites:', error.message);
    res.status(500).json({ error: 'Failed to add book to favorites' });
  }
};

module.exports = { searchBooks, getFavorites, addFavorite };