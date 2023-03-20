import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ButtonWrapper } from "./ButtonStyles";

export const Button = () => {
  const { setShowSigninModal } = useContext(LoginContext);

  return (
    <ButtonWrapper
      onClick={() => setShowSigninModal(true)}
    >
      Sign in
    </ButtonWrapper>
  );
};
