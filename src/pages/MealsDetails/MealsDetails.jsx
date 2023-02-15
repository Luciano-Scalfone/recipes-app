import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { MealsDetailsWrapper } from "./MealsDetailsStyles";
import { CardDetails } from "../../Components/CardDetails/CardDetails";
import { fetchByIDHelper } from "../../helpers/fetchByIDHeHelper";

export const MealsDetails = () => {
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
    <MealsDetailsWrapper className="container" data-testid="meals-details">
      <CardDetails meal={meal} />
      <Footer />
    </MealsDetailsWrapper>
  );
};
