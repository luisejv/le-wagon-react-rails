import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import axios from "axios";

const Home = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    const getPersonas = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=6");
      if (result.data.results && result.data.results.length > 0) {
        setPersonas(result.data.results);
      }
    };

    getPersonas();
  }, []);

  return (
    <div className="home-wagon">
      <CardList personas={personas} />
    </div>
  );
};

export default Home;
