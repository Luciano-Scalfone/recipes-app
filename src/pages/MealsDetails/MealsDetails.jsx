import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../../services/fetchs";
import { Footer } from "../../Components/Footer/Footer";
import { MealsDetailsWrapper } from "./MealsDetailsStyles";
import { CardDetails } from "../../Components/CardDetails/CardDetails";

export const MealsDetails = () => {
  const urlParameter = useParams();
  const [meal, setMeal] = useState({});

  const handleIngredientsAndMeasures = (meal) => {
    const ingredientsList = [];

    for (let ingredient in meal) {
      if (ingredient.includes('strIngredient') && meal[ingredient].length > 0) {
        const measureKey = `strMeasure${ingredient.match(/(\d+)/)[0]}`;
        const ingredientAndMeasure = `${meal[measureKey]} ${meal[ingredient]}`

        ingredientsList.push(ingredientAndMeasure);
      }
    };

    return ingredientsList;
  };

  const handleIntruction = (meal) => {
    const splitedIntruction = meal.split(/(\d+\.+\s)/);
    
    splitedIntruction.map((item, index) => {
      if (item.match(/(\d+\.)/)) {
        splitedIntruction.splice(index, 1);
      }
    });

    return splitedIntruction;
  };

  useEffect(() => {
    (async () => {
      const data = await fetchById(urlParameter.id);
      setMeal({
        image: data[0].strMealThumb,
        name: data[0].strMeal,
        instructions: handleIntruction(data[0].strInstructions),
        area: data[0].strArea,
        category: data[0].strCategory,  
        ingredients: handleIngredientsAndMeasures(...data),
      });
    })();

  }, [urlParameter.id]);
  
  return (
    <MealsDetailsWrapper className="container" data-testid="meals-details">
      <CardDetails meal={meal} />
      <Footer />
    </MealsDetailsWrapper>
  );
};
