// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this file contains your full CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);