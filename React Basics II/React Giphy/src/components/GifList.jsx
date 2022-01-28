import React from "react";
import Gif from "./Gif";

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <Gif id={gif.id} key={gif.id} url={gif.url} selectGif={selectGif} />
      ))}
    </div>
  );
};

export default GifList;
