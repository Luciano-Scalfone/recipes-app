import { useState, useEffect } from "react";
import RecipeTitle from "../RecipeTitle/RecipeTitle";
import { PrepareInstructionsWrapper } from "./PrepareInstructionsStyles";

export const PrepareInstructions = ({ meal }) => {
  const { videoLink, name, ingredients, instructions } = meal;
  const [ingredientsChecked, setIngredientsChecked] = useState([]);

  const isDoneButtonDisabled = () => {
    console.log(ingredientsChecked);
    console.log(
      ingredientsChecked?.every((ingredient) => ingredient.isChecked === true)
    );
  };

  useEffect(() => {
    const ingredientsAssync = async () => {
      const newIngredients = await ingredients;
      const modifiedIngredients = newIngredients.map((ingredient) => {
        return { ingredientName: ingredient, isChecked: false };
      });
  
      setIngredientsChecked(modifiedIngredients);

    }
  }, []);

  return (
    <PrepareInstructionsWrapper
      className="container"
      data-testid="prepare-instructions"
    >
      <RecipeTitle recipe={meal} />
      <iframe
        src={videoLink}
        title={name}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ul>
        {ingredients?.map((ingredient, index) => {
          return (
            <li key={ingredient + index}>
              <label>
                <input type="checkbox" id={ingredient} />
                {ingredient}
              </label>
            </li>
          );
        })}
      </ul>
      <ol data-testid="instructions-list" className="instructionList">
        <h4>Instructions:</h4>
        {instructions?.map((instruction, index) => {
          return <li key={`instruction-${index + 1}`}>{instruction}</li>;
        })}
      </ol>
      <button>Done</button>
    </PrepareInstructionsWrapper>
  );
};
