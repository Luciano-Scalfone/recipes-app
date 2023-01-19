import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #FFCDB5;
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    width: 50%;
    height: 50%;
    border: none;
    outline: none;
    padding: 0 1%;
    font-size: 2vh;

    &::placeholder {
      font-style: italic;
      color: rgba(200, 200, 200);
    }
  }

  & select, button {
    background-color: rgba(245, 245, 245);
    width: 5%;
    height: 50%;
    border-radius: 5px 0 0 5px;
    border: none;
    outline: none;
    padding: 0 1%;
    font-size: 2vh;
  }

  & button {
    background-color: #FFE5AB;
    width: 3%;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: filter 0.1s;

    &:active {
      filter: contrast(80%);
    }
  }
`;
