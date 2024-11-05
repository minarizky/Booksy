import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import DoneReadingPage from './pages/DoneReadingPage';
import logo from './booksy.png'; // Import your logo

function App() {
  const [favorites, setFavorites] = useState([]);
  const [doneReading, setDoneReading] = useState([]);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  const removeFromFavorites = (bookId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((book) => book.id !== bookId)
    );
  };

  const addToDoneReading = (book) => {
    setDoneReading((prevDoneReading) => [...prevDoneReading, book]);
  };

  const removeFromDoneReading = (bookId) => {
    setDoneReading((prevDoneReading) =>
      prevDoneReading.filter((book) => book.id !== bookId)
    );
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <img src={logo} alt="Booksy Logo" className="logo" />
        </header>
        <div className="content-box">
          <Routes>
            <Route
              path="/"
              element={
                <SearchPage
                  addToFavorites={addToFavorites}
                  addToDoneReading={addToDoneReading}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesPage
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/done-reading"
              element={
                <DoneReadingPage
                  doneReading={doneReading}
                  removeFromDoneReading={removeFromDoneReading}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;