import RecipeTitle from "../RecipeTitle/RecipeTitle";
import { PrepareInstructionsWrapper } from "./PrepareInstructionsStyles";

export const PrepareInstructions = ({ meal }) => {
  console.log(meal.videoLink);
  return (
    <PrepareInstructionsWrapper
      className="container"
      data-testid="prepare-instructions"
    >
      <RecipeTitle recipe={meal} />
      <iframe
        src={meal.videoLink}
        title={meal.name}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
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
