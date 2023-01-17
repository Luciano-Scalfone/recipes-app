import React, { useEffect } from "react";
import { Body } from "../Components/Body";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { fetchAllCategories } from "../services/fetchs";

const Home = () => {
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
