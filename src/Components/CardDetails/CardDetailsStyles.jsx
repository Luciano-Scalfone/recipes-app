import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  flex: 1;
  background-color: #FFF6F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;

  & h1 {
    font-size: 4vw;
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'contentImage contentDescriptions';
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;
  padding: 0 2.5vw;

  & img {
    grid-area: contentImage;
    padding-right: 3vw;
  }

  & p {
    grid-area: contentDescriptions;
  }
`
