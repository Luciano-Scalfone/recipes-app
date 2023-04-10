import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { getUserInformation } from "../services/fetchs";
import { MealsContext } from "./MealsContext";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const { setRecipesMaked } = useContext(MealsContext);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      (async () => {
        const recipesMaked = await getUserInformation(userToken, "recipes-maked")
          .then(data => data);
    
          setRecipesMaked(recipesMaked);
      })();
      
      setUserAuthenticated(userToken);
    }
  }, [showSigninModal, showSignupModal]);

  return (
    <LoginContext.Provider
      value={{
        showSigninModal,
        setShowSigninModal,
        showSignupModal,
        setShowSignupModal,
        userAuthenticated,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
