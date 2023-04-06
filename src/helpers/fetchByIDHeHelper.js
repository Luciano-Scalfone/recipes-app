export const handleIngredientsAndMeasures = (meal) => {
  const ingredientsList = Object.entries(meal)
    .filter(([key, value]) => key.includes("strIngredient") && value.length > 0)
    .map(([key, value]) => {
      const measureKey = `strMeasure${key.match(/(\d+)/)[0]}`;

      return `${meal[measureKey]} ${value}`;
    });

  return ingredientsList;
};

export const handleIntruction = (meal) => {
  const splitedIntruction = meal
    .split(/(\d+\.+\s)/)
    .filter((item) => item.length > 3 && item);

  return splitedIntruction;
};

export const handleLink = (link) => {
  return link.split("watch?v=").join("embed/");
};
