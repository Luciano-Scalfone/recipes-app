import { useEffect, useRef, useContext } from "react";
import { useParams } from "react-router";
import { Cards } from "../../Components/Cards/Cards";
import { MealsContext } from "../../context/MealsContext";
import { getUserInformation } from "../../services/fetchs";
import { ProfileWrapper } from "./ProfileStyles";

export const Profile = () => {
  const token = useParams().id;
  const userDetails = useRef({});
  const { meals } = useContext(MealsContext);

  useEffect(() => {
    (async () => {
      const user = await getUserInformation(token, "profile");
      const recipesMaked = await getUserInformation(token, "recipes-maked");

      userDetails.current = { ...user, recipesMaked };

      console.log(userDetails.current)
    })();
  
  }, []);
 
  return (
    <ProfileWrapper>
      <h1>Recipes Maked</h1>
      {meals.filter(meal => userDetails.current.recipesMaked.includes(meal.id)).map((meal) => (
        <Cards
          name={meal.name}
          key={meal.id}
          id={meal.id}
          imageSrc={meal.image}
        />
      ))}
    </ProfileWrapper>
  );
};
