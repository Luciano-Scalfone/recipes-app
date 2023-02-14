import styled from "styled-components";

export const FooterWrapper = styled.footer`
  grid-area: footer;
  background-color: #FFCDB5;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;

  & a {
    font-size: 1.1vw;
    color: black;
    text-decoration: none;
    transition: font-size 0.5s;
  }

  & a:hover {
    font-size: 1.2vw;
  }
`;
