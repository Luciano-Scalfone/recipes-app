import { useEffect } from "react";
import { useParams } from "react-router";
import { getUserInformation } from "../../services/fetchs";
import { ProfileWrapper } from "./ProfileStyles";

export const Profile = () => {
  const token = useParams().id;

  useEffect(() => {
    (async () => {
      const user = await getUserInformation(token, "profile");
      // const recipesMaked = await getUserInformation(token, "recipes-maked");
      console.log(user);
    })()
  }, [])
  return( 
  <ProfileWrapper >

  </ProfileWrapper>
  );
};
