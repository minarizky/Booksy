import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchPage = ({ addToFavorites, addToDoneReading }) => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchQuery.trim() === '') return; // Do nothing if search query is empty

      try {
        const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`
        );
        setBooks(response.data.items || []);
      } catch (err) {
        console.error('API call failed:', err);
        setError('Failed to fetch books');
      }
    };

    fetchBooks();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <nav>
        <Link to="/favorites">Favorites</Link> | <Link to="/done-reading">Done Reading</Link>
      </nav>
      <div className="books-section">
        {error ? (
          <div className="error-message">{error}</div>
        ) : books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-thumbnail"
                />
              )}
              <div className="book-actions">
                <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
                <button onClick={() => addToDoneReading(book)}>Done Reading</button>
              </div>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;