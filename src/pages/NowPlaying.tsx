import { useEffect, useState } from "react";
import axios from "axios";

type MovieObject = {
  title: string;
  overview: string;
};

type MovieResponse = {
  //   dates: { string: string };
  //   page: number;
  results: any[];
};

const NowPlaying = () => {
  const [like, setLike] = useState<boolean>(false);
  const [movieObj, setMovieObj] = useState<any[]>([]);

  const getNowPlaying = async () => {
    const response = await axios.get<MovieResponse>(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a0fdd7d682edade22bbce21b7ecf4554&language=en-US&page=1&region=NL"
    );
    setMovieObj(response.data.results);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <div>
      <h2>Now Playing in your area:</h2>
      <button onClick={() => setLike(!like)}>Like</button>
      {like ? <p>Liked</p> : <></>}
    </div>
  );
};

export default NowPlaying;
