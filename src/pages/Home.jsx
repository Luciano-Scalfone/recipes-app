import React, { useEffect } from "react";
import { fetchAllCategories } from "../requests/fetchs";

const Home = () => {
  useEffect(() => {
    fetchAllCategories();
  }, [])

  return <h1>Hello World!</h1>;
};

export default Home;
