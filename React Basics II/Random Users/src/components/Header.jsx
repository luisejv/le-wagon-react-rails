import React from "react";
import Searchbar from "./Searchbar";

const Header = ({ query, setQuery }) => {
  return (
    <header className="navbar-wagon">
      <div>Header</div>
      <Searchbar query={query} setQuery={setQuery}></Searchbar>
    </header>
  );
};

export default Header;
