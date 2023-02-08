import { CardDetailsWrapper } from "./CardDetailsStyles";

export const CardDetails = ({ meal }) => {
  return (
    <CardDetailsWrapper className="container" data-testid="cards-details">
      <img src={meal.image} alt="Meal" height="100px" width="100px" />
      <h1>{meal.name}</h1>
    </CardDetailsWrapper>
  );
};
