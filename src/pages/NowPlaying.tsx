import { useEffect } from "react";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { fetchMovies } from "../store/movieSlice";
import { useAppSelector } from "../store";

type MovieObject = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

const NowPlaying: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h2>Now Playing in your area:</h2>

      {movies !== null ? (
        movies.map((mov) => {
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
