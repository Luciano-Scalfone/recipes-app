import { PrepareInstructionsWrapper } from "./PrepareInstructionsStyles";

export const PrepareInstructions = ({ meal }) => {

  return (
    <PrepareInstructionsWrapper className="container" data-testid="prepare-instructions">
      <h1>{meal.name}</h1>
      <h3 data-testid="area-and-category">
        Area: {meal.area} | Category: {meal.category}
      </h3>
      {/* <div data-testid="prepare-details">
        <img src={meal.image} alt="Meal" height="100%" width="100%" />
        <ul data-testid="ingredients-list-checkbox" className="ingredientsList">
          <h4>Ingredients:</h4>
          { meal.ingredients?.map((ingredient, index) => {
              return (
                <li key={`ingredient-${index+1}`} >{ingredient}</li>
              )
          }) }
        </ul>
        <ol data-testid="instructions-list-checkbox" className="instructionList">
          <h4>Instructions:</h4>
          { meal.instructions?.map((instruction, index) => {
              return (
                <li key={`instruction-${index+1}`} >{instruction}</li>
              )
          }) }
        </ol>
      </div> */}
    </PrepareInstructionsWrapper>
  );
};
