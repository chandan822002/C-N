import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure Tailwind CSS or your custom styles are imported
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance monitoring
import { BrowserRouter } from "react-router-dom"; // Router for routing

import { Provider } from 'react-redux'; // Redux provider
import { store } from "./redux/store" // Your Redux store

// Creating the root of the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// Optional: Measure and log performance
reportWebVitals();
