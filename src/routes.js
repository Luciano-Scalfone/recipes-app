import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealsDetails from "./pages/MealsDetails";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealsDetails/:id" element={<MealsDetails />} />
      </Routes>
  );
};

export default Router;
