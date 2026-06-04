// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Main App
import App from "./App";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Redux Provider */}
    <Provider store={store}>

      {/* Browser Router */}
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);