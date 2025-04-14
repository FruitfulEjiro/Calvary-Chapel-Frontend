import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


// Local Modules
import App from "./app.jsx";

// Styles
import "./styles/bootstrap.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <App />
   </StrictMode>
);
