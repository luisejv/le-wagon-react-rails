import React from "react";

const Gif = ({ id, url, selectGif }) => {
  const handleClick = () => {
    if (selectGif) {
      selectGif({ id, url });
    }
  };

  return <img src={url} className="gif" onClick={handleClick} alt="..." />;
};

export default Gif;
