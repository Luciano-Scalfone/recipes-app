import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";
import { Cards } from "../Cards/Cards";
import { BodyWrapper } from "./BodyStyles";

export const Body = () => {
  const { meals } = useContext(MealsContext);

  return (
    <BodyWrapper>
      {meals.map((meal) => (
        <Cards name={meal.name} key={meal.id} imageSrc={meal.image} />
      ))}
    </BodyWrapper>
  );
};
