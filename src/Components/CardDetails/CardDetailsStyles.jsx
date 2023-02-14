import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  flex: 1;
  background-color: #FFF6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;

  & h1 {
    font-size: 4vw;
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'contentImage contentList contentDescriptions' ;
  grid-template-columns: 30% 35% 35%;
  padding: 0 2.5vw;

  & img {
    grid-area: contentImage;
    // padding-right: 3vw;
    border-radius: 15px;
  }

  & .instructionList {
    grid-area: contentDescriptions;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    justify-content: center;
  }

  & .ingredientsList {
    width: fit-content;
    height: fit-content;
    grid-area: contentList;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    margin: 15% 0 0 35%;
    // justify-content: center;
    // align-items: center;
  }
`
