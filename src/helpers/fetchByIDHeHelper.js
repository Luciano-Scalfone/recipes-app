import { fetchById } from "../services/fetchs";

const handleIngredientsAndMeasures = (meal) => {
  const ingredientsList = Object.entries(meal)
    .filter(([key, value]) => key.includes("strIngredient") && value.length > 0)
    .map(([key, value]) => {
      const measureKey = `strMeasure${key.match(/(\d+)/)[0]}`;

      return `${meal[measureKey]} ${value}`;
    });

  return ingredientsList;
};

const handleIntruction = (meal) => {
  const splitedIntruction = meal
    .split(/(\d+\.+\s)/)
    .filter((item) => item.length > 3 && item);

  return splitedIntruction;
};

export const fetchByIDHelper = async ( id ) => {
  const data = await fetchById(id);

  return {
    id,
    image: data[0].strMealThumb,
    name: data[0].strMeal,
    instructions: handleIntruction(data[0].strInstructions),
    area: data[0].strArea,
    category: data[0].strCategory,
    ingredients: handleIngredientsAndMeasures(...data),
  };
};
