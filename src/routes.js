import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import Home from "./pages/Home/Home";
import MealsDetails from "./pages/MealsDetails";
import PrepareRecipes from "./pages/PrepareRecipes";
import { Profile } from "./pages/Profile/Profile";

const Router = () => {
  const { userAuthenticated} = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealsDetails/:id" element={<MealsDetails />} />
        {userAuthenticated && (
          <>
            <Route path="/prepareRecipes/:id" element={<PrepareRecipes />} />
            <Route path="/profile/:id" element={<Profile />} />
          </>
        )}
        <Route path="/*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
