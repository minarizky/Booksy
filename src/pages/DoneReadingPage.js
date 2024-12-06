import React from 'react';

const DoneReadingPage = ({ doneReading, removeFromDoneReading }) => {
  return (
    <div className="container">
      <h2>Done Reading</h2>
      {doneReading.length > 0 ? (
        doneReading.map((book) => (
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
            <button onClick={() => removeFromDoneReading(book.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No books marked as read</p>
      )}
    </div>
  );
};

export default DoneReadingPage;