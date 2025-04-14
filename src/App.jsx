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

// Components
import MenMinistry from "./components/MenMinistry.jsx";
import WomenMinistry from "./components/WomenMinistry.jsx";
import YouthMinistry from "./components/YouthMinistry.jsx";
import ChildrenMinistry from "./components/ChildrenMinistry.jsx";
import Verse from "./components/Verse.jsx";
import DummyText from "./components/DummyText.jsx";
import History from "./components/History.jsx";
import Statement from "./components/Statement.jsx";
import Leadership from "./components/Leadership.jsx";

// Routes
const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   {
      path: "/ministry",
      element: <Ministry />,
      children: [
         { index: true, element: <MenMinistry /> },
         { path: "men-ministry", element: <MenMinistry /> },
         { path: "women-ministry", element: <WomenMinistry /> },
         { path: "youth-ministry", element: <YouthMinistry /> },
         { path: "children-ministry", element: <ChildrenMinistry /> },
      ],
   },
   {
      path: "/resources",
      element: <Resources />,
      children: [
         { path: "verse", element: <Verse /> },
         { path: "wednesday-services", element: <DummyText /> },
         { path: "sunday-services", element: <DummyText /> },
         { path: "guest-speakers", element: <DummyText /> },
         { path: "character-studies", element: <DummyText /> },
         { path: "topical-studies", element: <DummyText /> },
         { path: "conferences", element: <DummyText /> },
      ],
   },
   { path: "/schedule", element: <Schedule /> },
   {
      path: "/about",
      element: <About />,
      children: [
         { path: "history", element: <History /> },
         { path: "statement-of-faith", element: <Statement /> },
         { path: "leadership", element: <Leadership /> },
      ],
   },
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
