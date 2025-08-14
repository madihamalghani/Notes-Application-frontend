import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = process.env.REACT_APP_FONTAWESOME_CDN;
document.head.appendChild(faLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



