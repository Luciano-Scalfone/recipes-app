import styled from "styled-components";

export const SignupWrapper = styled.div.attrs({ className: "signup-wrapper" })`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .signup-wrapper__cross-icon {
    position absolute;
    right: 0;
    top: 0;
    transform: translate(-30%, 30%);
  }

  & .signup-wrapper__input-field {
    height: 32px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 8px;
}

& .signup-wrapper__input-field input {
    outline: none;
    border: none;
    flex: 1;
}
`;
