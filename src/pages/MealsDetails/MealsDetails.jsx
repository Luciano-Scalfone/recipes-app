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
    const ingredientsList = Object.entries(meal)
      .filter(
        ([key, value]) => key.includes("strIngredient") && value.length > 0
      )
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

  useEffect(() => {
    (async () => {
      const data = await fetchById(urlParameter.id);
      setMeal({
        id: urlParameter.id,
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
