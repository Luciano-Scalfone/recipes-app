import { CardWrapper } from "./CardStyles";

export const Cards = ({ name, imageSrc }) => {
  return (
    <CardWrapper>
      <img src={imageSrc} alt={`${name} meal`} />
      <h2>{name}</h2>
    </CardWrapper>
  );
};
