import { Card } from "../Cards/Cards";
import { BodyWrapper } from "./BodyStyles";

export const Body = ({ meals }) => {
  console.log(meals);
  return (
    <BodyWrapper>
      {meals.map((meal) => (
        <Card name={meal.name} key={meal.id} imageSrc={meal.image} />
      ))}
    </BodyWrapper>
  );
};
