import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [showSigninModal, setShowSigninModal] = useState(false);

  return (
    <LoginContext.Provider value={{ showSigninModal, setShowSigninModal }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
