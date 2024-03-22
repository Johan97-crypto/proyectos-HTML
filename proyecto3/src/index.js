import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client en lugar de ReactDOM
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Utiliza createRoot en lugar de ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();




