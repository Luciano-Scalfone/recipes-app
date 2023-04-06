import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    console.log(userToken);

    if (userToken) {
      console.log('entrou no if');
      setIsLoggedIn(true);
    }
  }, [showSigninModal, showSignupModal]);

  return (
    <LoginContext.Provider
      value={{
        showSigninModal,
        setShowSigninModal,
        showSignupModal,
        setShowSignupModal,
        isLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
