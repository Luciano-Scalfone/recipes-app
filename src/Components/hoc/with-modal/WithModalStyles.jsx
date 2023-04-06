import styled from "styled-components";

export const WithModalWrapper = styled.div.attrs({className: 'with-modal-wrapper'})`
    width: 100vw;
    height: 100vh;
    background-color: rgba(93, 102, 112, 0.9);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    & .signin-wrapper__cross-icon {
        position absolute;
        right: 0;
        top: 0;
        transform: translate(-30%, 30%);
        cursor: pointer;
     }

    & .with-modal-wrapper__section {
        position relative;
        background-color: white;
        border-radius: 5px;
        padding: 32px;
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
`;
