import React from "react";

const Card = ({ persona }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={persona.picture.large} alt="profile" />
      </div>
      <div className="card-body">
        <h3>{`${persona.name.first} ${persona.name.last}`}</h3>
        <p>{`Vive en ${persona.location.city}, ${persona.location.state} en el pais de ${persona.location.country} y tiene ${persona.dob.age} años. Su teléfono es ${persona.phone} y su correo es ${persona.email}`}</p>
      </div>
    </div>
  );
};

export default Card;
