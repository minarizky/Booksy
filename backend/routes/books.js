const express = require('express');
const router = express.Router();

// Route to fetch books from the Google Books API
router.get('/', async (req, res) => {
  const { q } = req.query; // Get the search query from the request
  if (!q) {
    return res.status(400).json({ error: 'Harry Potter' });
  }
  try {
    const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${AIzaSyCnEP2RDDtVGxCAPuwnFFe5Rjpb7CKj9IY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books from Google Books API' });
  }
});

module.exports = router;