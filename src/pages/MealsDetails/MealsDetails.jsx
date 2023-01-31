import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchById } from "../../services/fetchs";

export const MealsDetails = () => {
  const urlParameter = useParams();
  const [meal, setMeal] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchById(urlParameter.id);
      setMeal(data);
    })();
  }, []);

  return (
    <div className="container" data-testid="meals-details">
      {urlParameter.id}
    </div>
  );
};
