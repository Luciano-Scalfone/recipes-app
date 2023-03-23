import styled from "styled-components";

export const SigninWrapper = styled.div.attrs({ className: "signin-wrapper" })`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & .signin-wrapper__cross-icon {
       position absolute;
       right: 0;
       top: 0;
       transform: translate(-30%, 30%);
    }

    & .signin-wrapper__input-field {
        height: 32px;
        border: 1px solid black;
        border-radius: 5px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 0 8px;
    }

    & .signin-wrapper__input-field input {
        outline: none;
        border: none;
        flex: 1;
    }
`;
