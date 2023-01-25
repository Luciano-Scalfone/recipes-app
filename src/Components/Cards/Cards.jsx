import { CardWrapper } from "./CardStyles";

export const Cards = ({ name, imageSrc }) => {
  return (
    <CardWrapper data-testid="cards-element">
      <img src={imageSrc} alt={`${name} meal`} />
      <h2>{name}</h2>
    </CardWrapper>
  );
};
