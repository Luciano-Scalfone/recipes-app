import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";

const routes = createBrowserRouter([{ path: "/", element: <Home /> }]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
