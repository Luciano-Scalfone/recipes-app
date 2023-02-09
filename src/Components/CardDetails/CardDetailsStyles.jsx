import styled from "styled-components";

export const CardDetailsWrapper = styled.div`
  flex: 1;
  background-color: #FFF6F6;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 4vw;
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-areas: 'contentImage contentDescriptions';
  grid-template-columns: 30% 70%;
`
