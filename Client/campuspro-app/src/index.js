import React from "react";
import ReactDOM from "react-dom/client";
import "react-tooltip/dist/react-tooltip.css";
import App from "./App";

// import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";

// Set the app element
Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
