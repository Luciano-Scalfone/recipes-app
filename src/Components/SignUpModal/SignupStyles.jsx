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
`;
