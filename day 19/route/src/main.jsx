import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import TopBar from "./components/TopBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <div>404 not found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
