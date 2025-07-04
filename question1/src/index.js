import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // The main App component
// import "./index.css"; // Global CSS styles (if any)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* The main App component that will be rendered */}
  </React.StrictMode>
);
