import { CardWrapper } from "./CardStyles";

export const Cards = ({ name, imageSrc, id, onCardClick }) => {

  return (
    <CardWrapper data-testid="cards-element" onClick={() => onCardClick(id)}>
      <img src={imageSrc} alt={`${name} meal`} />
      <h2>{name}</h2>
    </CardWrapper>
  );
};
