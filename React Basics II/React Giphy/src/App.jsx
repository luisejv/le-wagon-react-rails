import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Gif from "./components/Gif";
import GifList from "./components/GifList";

const GIPHY_API_KEY = "9W9SxGGmDbyGumWdxtnMwh221Yo8GAxl";

function App() {
  const [gifs, setGifs] = useState([]);
  const [selectedGif, setSelectedGif] = useState({
    id: "xT9IgDEI1iZyb2wqo8",
    url: "https://media4.giphy.com/media/xT9IgDEI1iZyb2wqo8/giphy.gif?cid=790b76117b5f7ea79f5874d2779a0b1a61e42b00cbbf66a9&rid=giphy.gif&ct=g",
  });

  const search = (query) => {
    const gifEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    axios.get(gifEndpoint).then((response) => {
      console.log(response);
      setGifs(
        response.data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.downsized.url,
        }))
      );
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={search} />
        <div className="selected-gif">
          <Gif id={selectedGif.id} url={selectedGif.url}></Gif>
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} selectGif={setSelectedGif} />
      </div>
    </div>
  );
}

export default App;
