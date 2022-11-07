import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// this step is better done in server side,
// send the selected file to the backend API endpoint which will have infura credentials and will automatically upload it there
require('dotenv').config({path: '../'})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
