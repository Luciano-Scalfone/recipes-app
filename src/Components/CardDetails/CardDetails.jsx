import { CardDetailsWrapper } from "./CardDetailsStyles";

export const CardDetails = ({ meal }) => {
  return (
    <CardDetailsWrapper className="container" data-testid="cards-details">
      <h1>{meal.name}</h1>
      <h3 data-testid="areaAndCategory">Area: {meal.area} | Category: {meal.category}</h3>
      <img src={meal.image} alt="Meal" height="30%" width="30%" />
      <p>{meal.instructions}</p>
    </CardDetailsWrapper>
  );
};
