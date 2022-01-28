import React from "react";

const Gif = ({ gif }) => {
  return (
    <div>
      {/* <img src={src} alt="" /> */}
      {gif.src}
    </div>
  );
};

export default Gif;
