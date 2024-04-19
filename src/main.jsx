import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./assets/css/pe-icon-7.css";
import "./assets/scss/themes.scss";

const router = createBrowserRouter(
  routes.map((x) => ({
    path: x.path,
    element: <x.component />,
  }))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
