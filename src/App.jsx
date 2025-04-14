import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles
import "./styles/styles.css";
// Pages
import Home from "./pages/Home.jsx";
import Ministry from "./pages/Ministry.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Schedule from "./pages/Schedule.jsx";

// Routes
const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "/ministry", element: <Ministry /> },
   { path: "/resources", element: <Resources /> },
   { path: "/schedule", element: <Schedule /> },
   { path: "/about", element: <About /> },
   { path: "/contact", element: <Contact /> },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
