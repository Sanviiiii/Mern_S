import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM
import "./index.css"; // Ensure this file exists and has valid CSS
import App from "./App.jsx"; // Correct App import
import { BrowserRouter } from "react-router-dom"; // Router import

// Create the root and render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
