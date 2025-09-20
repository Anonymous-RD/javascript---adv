import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Yellow from "./components/Yellow.jsx";

let root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Yellow></Yellow>
  </StrictMode>
);
