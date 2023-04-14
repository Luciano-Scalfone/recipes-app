import React, { useContext, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import { Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const MealsDetails = lazy(() => import("./pages/MealsDetails"));
const PrepareRecipes = lazy(() => import("./pages/PrepareRecipes"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

const Router = () => {
  const { userAuthenticated } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Suspense fallback={ <div>loading</div> }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealsDetails/:id" element={<MealsDetails />} />
          {userAuthenticated && (
            <>
              <Route path="/prepareRecipes/:id" element={<PrepareRecipes />} />
              <Route path="/profile/:id" element={<Profile />} />
            </>
          )}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
