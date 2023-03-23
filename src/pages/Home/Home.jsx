import React, { useContext } from "react";
import Body from "../../Components/Body";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Signin from "../../Components/LoginModal/Signin";
import { LoginContext } from "../../context/LoginContext";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  const { showSigninModal, showSignupModal } = useContext(LoginContext);

  return (
    <HomeWrapper data-testid="home-component">
      <Header />
      <Body />
      <Footer inHomePage />
      {showSigninModal && <Signin />}
      {showSignupModal && <Signin />}
    </HomeWrapper>
  );
};

export default Home;
