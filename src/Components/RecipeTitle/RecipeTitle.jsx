import React from "react";
import { RecipeTitleWrapper } from "./RecipeTitleStyles";

const RecipeTitle = ({ recipe: { name, area, category } }) => {

  return (
    <RecipeTitleWrapper data-testid="recipe-title-component">
      <h1>{name}</h1>
      <h3>{`Area: ${area} | Category: ${category}`}</h3>
    </RecipeTitleWrapper>
  );
};

export default RecipeTitle;
