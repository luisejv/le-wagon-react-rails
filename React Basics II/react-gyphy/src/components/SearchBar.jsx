import React from "react";

const SearchBar = ({ searchFunction }) => {
  const handleUpdate = (event) => {
    searchFunction(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={handleUpdate}
    />
  );
};

export default SearchBar;
