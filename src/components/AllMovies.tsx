import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store";
import { Grid } from "@mui/material";

const AllMovies = () => {
  const { movies } = useAppSelector((state) => state.movie);

  return (
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
              <Link style={{ textDecoration: "none" }} to={`/movie/${mov.id}`}>
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
  );
};

export default AllMovies;
