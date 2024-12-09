const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM books INNER JOIN favorites ON books.book_id = favorites.book_id'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

router.post('/', async (req, res) => {
  const { book } = req.body;
  if (!book || !book.book_id) {
    return res.status(400).json({ error: 'Book data is required' });
  }
  try {
    await db.query(
      'INSERT INTO books (book_id, title, authors, thumbnail, description) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
      [book.book_id, book.title, book.authors, book.thumbnail, book.description]
    );
    await db.query('INSERT INTO favorites (book_id) VALUES ($1)', [book.book_id]);
    res.status(201).json({ message: 'Book added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'favorites' });
  }
});

module.exports = router;