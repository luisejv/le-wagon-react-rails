import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
