import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { ButtonWrapper } from "./ButtonStyles";

export const Button = () => {
  const { setShowSigninModal } = useContext(LoginContext);

  return (
    <ButtonWrapper
      onClick={() => setShowSigninModal((prevState) => !prevState)}
    >
      Sign in
    </ButtonWrapper>
  );
};
