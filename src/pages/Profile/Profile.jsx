import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { Cards } from "../../Components/Cards/Cards";
import { MealsContext } from "../../context/MealsContext";
import { getUserInformation } from "../../services/fetchs";
import { ProfileWrapper } from "./ProfileStyles";

const Profile = () => {
  const token = useParams().id;
  const [ userDetails, setUserDetails ] = useState({});
  const { meals, recipesMaked } = useContext(MealsContext);

  useEffect(() => {
    (async () => {
      const user = await getUserInformation(token, "profile");

      setUserDetails({ ...user});
    })();
  }, []);

  return (
    <ProfileWrapper>
      <h1>Recipes Maked</h1>
      {meals.filter(meal => recipesMaked.includes(meal.id)).map((meal) => (
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

export default Profile;
