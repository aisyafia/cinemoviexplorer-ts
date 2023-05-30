import { useEffect } from "react";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { fetchMovies } from "../store/movieSlice";
import { useAppSelector } from "../store";
import { Container, Grid } from "@mui/material";

const NowPlaying: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container>
      <h2>Now Playing in your area:</h2>
      <Grid container spacing={1}>
        {movies !== null ? (
          movies.map((mov) => {
            return (
              <Grid
                key={mov.id}
                item
                xs={5}
                margin={2}
                sx={{
                  borderRadius: 2,
                  margin: 2,
                  padding: 3,
                  backgroundImage:
                    "linear-gradient(90deg, rgb(255,219, 203), rgb(255,190,163))",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${mov.id}`}
                >
                  <h2>{mov.title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                    alt={mov.title}
                    width="215rem"
                  />
                </Link>
                <LikeButton />
              </Grid>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </Grid>
    </Container>
  );
};

export default NowPlaying;
