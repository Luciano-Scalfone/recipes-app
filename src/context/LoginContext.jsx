import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
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
