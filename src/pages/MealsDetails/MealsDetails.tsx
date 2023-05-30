import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { MealsDetailsWrapper } from "./MealsDetailsStyles";
import { CardDetails } from "../../Components/CardDetails/CardDetails";
import { fetchByIDHelper } from "../../services/fetchs";
import { MealsType } from "../../interfaces/types";
import React from "react";

export const MealsDetails: React.FC = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({} as MealsType);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        const recipe = await fetchByIDHelper(id);
        setMeal(recipe);
      }
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
