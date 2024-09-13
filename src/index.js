// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Ensure this selector matches the id in your HTML file
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Ensure there's a div with id='root' in your index.html.");
}
