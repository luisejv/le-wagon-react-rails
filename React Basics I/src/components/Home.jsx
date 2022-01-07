import React from "react";
import personas from "../utils/personas.json";
import CardList from "./CardList";

const Home = () => {
  return (
    <div className="home-wagon">
      <CardList personas={personas} />
    </div>
  );
};

export default Home;
