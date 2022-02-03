import React from "react";

const Searchbar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Ingresa tu busqueda aqui"
      value={query}
      onChange={(event) => setQuery(event.currentTarget.value)}
    />
  );
};

export default Searchbar;
