import {GifState} from "../context/gif-context";
import { useEffect } from "react";
import Gif from "../components/gif";

const Home = () => {
  const {gf, gifs, setGifs, filter} = GifState();

const fetchTrendingGifs = async () => {
  const {data} = await gf.trending({
  limit: 20,
  type: filter,
  rating: "g",
});
setGifs(data);
};

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  console.log('Home gifs count:', gifs?.length);

  return (
    <div>
      <img src="/banner.gif" 
      className="mt-2 rounded w-full" 
      alt="earth banner" 
      />
     {/*  <FilterGifs /> */}

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {gifs.map((gif) => {
        return <Gif gif={gif} key={gif?.id || gif?.title} />;
      })}
    </div>

    </div>
  )
}

export default Home
