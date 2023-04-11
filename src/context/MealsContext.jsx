import { useEffect } from "react";
import { createContext, useState } from "react";
import { getUserInformation } from "../services/fetchs";

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [recipesMaked, setRecipesMaked] = useState([]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if(userToken) {
      (async () => {
        const mealsMaked = await getUserInformation(
          userToken,
          "recipes-maked"
        ).then((data) => data);
  
        setRecipesMaked(mealsMaked);
      })();
    };

  });

  return (
    <MealsContext.Provider
      value={{ meals, setMeals, recipesMaked, setRecipesMaked }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
