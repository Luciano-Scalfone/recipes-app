import { PrepareRecipesWrapper } from "./PrepareRecipesStyles";
import { Footer } from "../../Components/Footer/Footer";
import { PrepareInstructions } from "../../Components/RecipeInstructions/PrepareInstructions";

export const PrepareRecipes = () => {
  return (
    <PrepareRecipesWrapper className="container" data-testid="prepare-recipes">
      <PrepareInstructions />
      <Footer />
    </PrepareRecipesWrapper>
  );
};
