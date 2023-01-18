import React, { useEffect, useState } from "react";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { fetchAllCategories } from "../../services/fetchs";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    return () => {
      const PROMISSE_API = fetchAllCategories();

      PROMISSE_API.then((data) => {
        const FILTERED_MEAL = data.map((filteredMeal) => {
          return {
            id: filteredMeal.idMeal,
            name: filteredMeal.strMeal,
            image: filteredMeal.strMealThumb,
          };
        });

        setMealsList(FILTERED_MEAL);
      }).catch((error) => console.log("Erro na Api", error));
    };
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <Body meals={mealsList} />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
