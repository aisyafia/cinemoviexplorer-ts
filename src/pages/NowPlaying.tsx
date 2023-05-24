import { useEffect, useState } from "react";
import axios from "axios";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";

type MovieObject = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: MovieObject[];
};

const NowPlaying: React.FC<{}> = () => {
  const [movieObj, setMovieObj] = useState<MovieObject[] | null>(null);

  const getNowPlaying = async () => {
    const response = await axios.get<MovieResponse>(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a0fdd7d682edade22bbce21b7ecf4554&language=en-US&page=1&region=NL"
    );
    setMovieObj(response.data.results);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  //   const handleLike = (id: number) => setLike(!like);

  return (
    <div>
      <h2>Now Playing in your area:</h2>

      {movieObj !== null ? (
        movieObj.map((mov) => {
          return (
            <div key={mov.id}>
              <Link to={`/movie/${mov.id}`}>
                <h2>{mov.title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  alt={mov.title}
                  width="215rem"
                />
              </Link>
              <p>{mov.overview}</p>
              <LikeButton />
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default NowPlaying;
