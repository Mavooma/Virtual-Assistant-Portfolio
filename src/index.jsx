import React from "react";
import { createRoot } from "react-dom/client"; // Correct import
import "./index.css";
import App from "./App";

// Ensure there's an element with id 'root'
const container = document.getElementById("root");

// Create a root and render your App
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
