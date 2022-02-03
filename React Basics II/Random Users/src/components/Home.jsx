import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import axios from "axios";

const Home = ({ query }) => {
  const [personas, setPersonas] = useState([]);
  const [personasParaMostrar, setPersonasParaMostrar] = useState([]);

  useEffect(() => {
    const getPersonas = async () => {
      const result = await axios.get("https://randomuser.me/api/?results=6");
      if (result.data.results && result.data.results.length > 0) {
        setPersonas(result.data.results);
        setPersonasParaMostrar(result.data.results);
      }
    };

    getPersonas();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setPersonasParaMostrar(
        personas.filter(
          (persona) =>
            persona.name.first.toLowerCase().includes(query) ||
            persona.name.last.toLowerCase().includes(query)
        )
      );
    } else {
      setPersonasParaMostrar(personas);
    }
  }, [query]);

  return (
    <div className="home-wagon">
      <CardList personas={personasParaMostrar} />
    </div>
  );
};

export default Home;
