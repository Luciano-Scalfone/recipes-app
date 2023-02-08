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

  useEffect(() => {
    (async () => {
      const data = await fetchById(urlParameter.id);
      console.log(data[0].strInstructions)
      setMeal({
        image: data[0].strMealThumb,
        name: data[0].strMeal,
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
