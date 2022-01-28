import React from "react";
import Gif from "./Gif";
import SearchBar from "./SearchBar";

const MainContent = ({ query, setQuery, selectedGif }) => {
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery}></SearchBar>
      <Gif gif={selectedGif}></Gif>
    </div>
  );
};

export default MainContent;
