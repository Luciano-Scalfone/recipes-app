import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealsDetails from "./pages/MealsDetails";
import PrepareRecipes from "./pages/PrepareRecipes";
import { Profile } from "./pages/Profile/Profile";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealsDetails/:id" element={<MealsDetails />} />
        <Route path="/prepareRecipes/:id" element={<PrepareRecipes />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
  );
};

export default Router;
