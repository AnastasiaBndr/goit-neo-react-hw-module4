import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "modern-normalize";
import App from "./components/App.jsx";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
