import { useNavigate } from "react-router-dom";
import RecipeTitle from "../RecipeTitle/RecipeTitle";
import { CardDetailsWrapper, DetailsWrapper } from "./CardDetailsStyles";
import { MealType, MealsType } from "../../interfaces/types";
import React from "react";

export const CardDetails: React.FC<MealType<MealsType>> = ({ meal }) => {
  const navigateTo = useNavigate();

  return (
    <CardDetailsWrapper className="container" data-testid="cards-details">
      <RecipeTitle recipe={meal} />
      <DetailsWrapper data-testid="details">
        <img src={meal.image} alt="Meal" height="100%" width="100%" />
        <ul data-testid="ingredients-list" className="ingredientsList">
          <h4>Ingredients:</h4>
          {meal.ingredients?.map((ingredient, index) => {
            return <li key={`ingredient-${index + 1}`}>{ingredient}</li>;
          })}
        </ul>
        <ol data-testid="instructions-list" className="instructionList">
          <h4>Instructions:</h4>
          {meal.instructions?.map((instruction, index) => {
            return <li key={`instruction-${index + 1}`}>{instruction}</li>;
          })}
        </ol>
      </DetailsWrapper>
      <button onClick={() => navigateTo(`/prepareRecipes/${meal.id}`)}>
        Prepare
      </button>
    </CardDetailsWrapper>
  );
};
