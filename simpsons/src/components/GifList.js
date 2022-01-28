import axios from "axios";
import React, { useEffect } from "react";
import Gif from "./Gif";

const GifList = ({ arrayGifs, setSelectedGif, query }) => {
  const [array, setArray] = React.useState(arrayGifs);

  useEffect(() => {
    const getGifs = async () => {
      const response = await axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"
      );
      console.log(response);
      if (response.data && response.data.length > 0) {
        setArray(response.data);
      }
    };

    getGifs();

    // setArray(
    //   arrayGifs.filter((gif) => {
    //     return gif.src.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    //   })
    // );
  }, [query]);

  return (
    <div>
      {array.map((gif) => {
        return (
          <div key={gif.id} onClick={() => setSelectedGif(gif)}>
            <Gif gif={gif}></Gif>
          </div>
        );
      })}
    </div>
  );
};

export default GifList;
