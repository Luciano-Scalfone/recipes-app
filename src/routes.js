import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealsDetails from "./pages/MealsDetails";
import PrepareRecipes from "./pages/PrepareRecipes";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealsDetails/:id" element={<MealsDetails />} />
        <Route path="/prepareRecipes/:id" element={<PrepareRecipes />} />
      </Routes>
  );
};

export default Router;
