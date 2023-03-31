import styled from "styled-components";

export const SignupWrapper = styled.div.attrs({ className: "signup-wrapper" })`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;

  & .signup-wrapper__h4-title {
    font-size: 1.5rem;
  }

  & .signup-wrapper__sign-in {
    font-size: 0.9rem;
    font-weight: 400;
  }

  & .signup-wrapper__sign-in span {
    color: blue;
    cursor: pointer;
  }

  & button {
    width: 100%;
    font-size: 1.1rem;
    cursor: pointer;
  }

  & .pointer {
    cursor: pointer;
  }
`;
