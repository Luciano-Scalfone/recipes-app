import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 60vh;
  width: 40vh;
  border: 0.5px solid black;
  border-radius: 5%;
  box-shadow: 0 0 5px black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  background-color: #ffffff;

  & img {
    height: 90%;
    width: 100%;
  }
`;
