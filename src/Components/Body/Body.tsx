import { useContext } from "react";
import { MealsContext } from "../../context/MealsContext";
import { Cards } from "../Cards/Cards";
import { BodyWrapper } from "./BodyStyles";
import { useNavigate } from "react-router-dom";

export const Body: React.FC = () => {
  const { meals } = useContext(MealsContext);
  const navigate = useNavigate();

  const onClickLogic = (id: string): void => {
    navigate(`/mealsDetails/${id}`);
  };

  return (
    <BodyWrapper>
      {meals.map((meal) => (
        <Cards
          name={meal.name}
          key={meal.id}
          id={meal.id}
          imageSrc={meal.image}
          onCardClick={onClickLogic}
        />
      ))}
    </BodyWrapper>
  );
};
