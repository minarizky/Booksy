import React from 'react';

const FavoritesPage = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container">
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="book-thumbnail"
              />
            )}
            <button onClick={() => removeFromFavorites(book.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No favorite books added</p>
      )}
    </div>
  );
};

export default FavoritesPage;