import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoged , setIsLoged] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        showSigninModal,
        setShowSigninModal,
        showSignupModal,
        setShowSignupModal,
        isLoged,
        setIsLoged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
