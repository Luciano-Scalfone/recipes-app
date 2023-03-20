import { useState, useEffect } from "react";
import { PrepareRecipesWrapper } from "./PrepareRecipesStyles";
import { Footer } from "../../Components/Footer/Footer";
import { PrepareInstructions } from "../../Components/RecipeInstructions/PrepareInstructions";
import { useParams } from "react-router-dom";
import { fetchByIDHelper } from "../../helpers/fetchByIDHeHelper";

export const PrepareRecipes = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipe = await fetchByIDHelper(id);
      setMeal(recipe);
    };

    fetchRecipe();
  }, [id]);

  return (
    <PrepareRecipesWrapper className="container" data-testid="prepare-recipes">
      <PrepareInstructions meal={meal} />
      <Footer />
    </PrepareRecipesWrapper>
  );
};
