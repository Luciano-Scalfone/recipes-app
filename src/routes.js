import React from "react";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import MealsDetails from "./pages/MealsDetails";
import PrepareRecipes from "./pages/PrepareRecipes";
import { Profile } from "./pages/Profile/Profile";

const userToken = localStorage.getItem("userToken");

const protectedRoutes = [
  { path: "/prepareRecipes/:id", element: <PrepareRecipes /> },
  { path: "/profile/:id", element: <Profile /> },
];

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/mealsDetails/:id", element: <MealsDetails /> },
  ...(userToken ? protectedRoutes : []),
  // { path: "/*", element: <Navigate to="/" replace /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
