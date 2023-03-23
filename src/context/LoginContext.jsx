import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        showSigninModal,
        setShowSigninModal,
        showSignupModal,
        setShowSignupModal,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
