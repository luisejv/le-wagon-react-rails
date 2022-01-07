import React from "react";
import Card from "./Card";

const CardList = ({ personas }) => {
  return (
    <div className="card-list">
      {personas.slice(0, 6).map((persona) => {
        return <Card key={persona.login.uuid} persona={persona}></Card>;
      })}
    </div>
  );
};

export default CardList;
