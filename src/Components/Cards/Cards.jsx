import { CardWrapper } from "./CardStyles";

export const Card = ({ name, imageSrc }) => {
  return (
    <CardWrapper>
      <img src={imageSrc} alt={`${name} meal`} />
      <h2>{name}</h2>
    </CardWrapper>
  );
};
