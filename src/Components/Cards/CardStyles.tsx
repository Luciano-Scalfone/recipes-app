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
  cursor: pointer;
  transition: filter 0.6s;
  position: relative;

  &:hover {
    filter: brightness(1.3)
  }

  & img {
    height: 90%;
    width: 100%;
  }
`;

export const PillWrapper = styled.div`
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-50%, 100%);
  border: 1px solid #709127;
  border-radius: 15px;
  padding: 0.3rem 0.5rem;
  background-color: #A1C45A;

  &:after {
    content: "Maked";
  }
`;
