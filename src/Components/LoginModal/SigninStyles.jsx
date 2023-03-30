import styled from "styled-components";

export const SigninWrapper = styled.div.attrs({ className: "signin-wrapper" })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    & .signin-wrapper__cross-icon {
       position absolute;
       right: 0;
       top: 0;
       transform: translate(-30%, 30%);
       cursor: pointer;
    }

    & .signin-wrapper__h4-title {
        font-size: 1.5rem;
    }

    & .signin-wrapper__input-field {
        height: 15%;;
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

    & button {
        width: 100%;
        font-size: 1.2rem;
        cursor: pointer;
    }

    & .signin-wrapper__sign-up {
        font-size: 0.9rem;
        font-weight: 400;
    }

    & .signin-wrapper__sign-up span {
        color: blue;
        cursor: pointer;
    }
`;
