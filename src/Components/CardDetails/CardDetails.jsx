import { CardDetailsWrapper, DetailsWrapper } from "./CardDetailsStyles";

export const CardDetails = ({ meal }) => {
  return (
    <CardDetailsWrapper className="container" data-testid="cards-details">
      <h1>{meal.name}</h1>
      <h3 data-testid="areaAndCategory">
        Area: {meal.area} | Category: {meal.category}
      </h3>
      <DetailsWrapper data-testid="details">
        <img src={meal.image} alt="Meal" height="100%" width="100%" />
        <p>{meal.instructions}</p>
      </DetailsWrapper>
    </CardDetailsWrapper>
  );
};
