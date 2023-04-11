import { createContext, useState } from "react";

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [recipesMaked, setRecipesMaked] = useState([]);

  return (
    <MealsContext.Provider
      value={{ meals, setMeals, recipesMaked, setRecipesMaked }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
