import React from 'react';

const BookCard = ({ book, onAddFavorite }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      {book.cover_i && (
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
      )}
      <button onClick={() => onAddFavorite(book)}>Add to Favorites</button>
    </div>
  );
};

export default BookCard;