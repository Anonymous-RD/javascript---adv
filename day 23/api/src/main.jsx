import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryPage from "./CountryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    // children: [
    //   {
    //     path: "/about",
    //     element: <About></About>,
    //   },
    //   {
    //     path: "/home",
    //     element: <Home />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    // ],
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/countrypage",
    element: <CountryPage></CountryPage>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
