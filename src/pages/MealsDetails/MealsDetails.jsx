import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../../services/fetchs";
import { Footer } from "../../Components/Footer/Footer";

export const MealsDetails = () => {
  const urlParameter = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetchById(urlParameter.id);

      setMeal({
        image: data[0].strMealThumb,
        name: data[0].strMeal,
      });
    })();
  }, [urlParameter.id]);
  
  return (
    <div className="container" data-testid="meals-details">
      <img src={meal.image} alt="Meal" />
      <h1>{meal.name}</h1>
      <Footer />
    </div>
  );
};
