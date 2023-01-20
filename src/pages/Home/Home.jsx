import React from "react";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper data-testid="home-component">
      <Header />
      <Body />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
