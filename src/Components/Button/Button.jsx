import { ButtonWrapper } from "./ButtonStyles";

export const Button = ({textContent, handleOnClick}) => {
  return (
    <ButtonWrapper
      onClick={() => handleOnClick()}
    >
      {textContent}
    </ButtonWrapper>
  );
};
