import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store";
import { Container, Grid } from "@mui/material";
import { fetchUpcoming } from "../store/movieSlice";

const ComingSoon = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchUpcoming());
  }, [dispatch]);

  return (
    <div>
      <h2>Coming soon to your area:</h2>
      <Container>
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
                    backgroundColor: "rgb(248,248,255)",
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
                </Grid>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default ComingSoon;
