import React, { useEffect, useState } from "react";
import { Body } from "../Components/Body";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { fetchAllCategories } from "../services/fetchs";

const Home = () => {
  const [dataUsedFromApi, setDataUsedFromApi] = useState();

  useEffect(() => {
    return () => {
      const PROMISSE_API = fetchAllCategories();

      PROMISSE_API.then((data) => setDataUsedFromApi(data)).catch((error) =>
        console.log("Erro na Api", error)
      );
    };
  }, []);

  return (
    <div className="container">
      <Header test={dataUsedFromApi} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
