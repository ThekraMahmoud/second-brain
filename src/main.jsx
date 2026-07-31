import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BrainProvider from "./context/BrainContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BrainProvider>
        <App />
      </BrainProvider>
    </BrowserRouter>
  </StrictMode>,
);
