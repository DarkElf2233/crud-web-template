// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router
import { BrowserRouter } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
