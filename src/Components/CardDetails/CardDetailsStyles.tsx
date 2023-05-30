import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  height-min: 95vh;
  flex: 1;
  background-color: #FFF6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;

  & button {
    background-color: #A1C45A;
    border: none;
    border-radius: 5px;
    color: #FFF6F6;
    width: 5vw;
    height: 5vh;
    font-size: 1vw;
    transition: filter 0.1s;
    cursor: pointer;
    margin-bottom: 3vh;

    &:active {
      filter: contrast(80%);
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'contentImage contentList contentDescriptions' ;
  grid-template-columns: 30% 35% 35%;
  padding: 0 2.5vw;
  margin-bottom: 3vh;

  & img {
    grid-area: contentImage;
    height: 65vh;
    border-radius: 15px;
  }

  & .instructionList {
    grid-area: contentDescriptions;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    justify-content: center;
    background-color: #FFE5AB;
    width: 80%;
    padding: 3vh;
    border-radius: 15px;
    height: fit-content;
    font-size: 1.2vw;
  }

  & .ingredientsList {
    width: fit-content;
    height: fit-content;
    grid-area: contentList;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin: 0 auto;
    background-color: #FFE5AB;
    padding: 3vh;
    border-radius: 15px;
    font-size: 1.2vw;
  }
`
