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
        <ul data-testid="ingredients-list" className="ingredientsList">
          { meal.ingredients?.map((ingredient, index) => {
              return (
                <li key={`ingredient-${index+1}`} >{ingredient}</li>
              )
          }) }
        </ul>
        <ol data-testid="instructions-list" className="instructionList">
          { meal.instructions?.map((instruction, index) => {
              return (
                <li key={`instruction-${index+1}`} >{instruction}</li>
              )
          }) }
        </ol>
      </DetailsWrapper>
    </CardDetailsWrapper>
  );
};
