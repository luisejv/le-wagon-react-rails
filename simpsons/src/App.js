import React from "react";
import "./App.css";
import GifList from "./components/GifList";
import MainContent from "./components/MainContent";

const arrayGifs = [
  { id: 0, src: "Homero" },
  { id: 1, src: "March" },
  { id: 2, src: "Bart" },
  { id: 3, src: "Lisa" },
  { id: 4, src: "Maggie" },
];

const App = () => {
  const [selectedGif, setSelectedGif] = React.useState({
    id: 5,
    src: "selected Gif",
  });
  const [query, setQuery] = React.useState("");

  return (
    <>
      <MainContent
        query={query}
        setQuery={setQuery}
        selectedGif={selectedGif}
      ></MainContent>
      <GifList
        arrayGifs={arrayGifs}
        setSelectedGif={setSelectedGif}
        query={query}
      ></GifList>
    </>
  );
};

export default App;
