// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importing Browser Router
import { BrowserRouter } from "react-router-dom";

// Importing main App component
import App from "./App";

// Importing Tailwind CSS
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Browser Router wrapper */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);