import { Container, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store";
import { useEffect } from "react";
import { fetchMovieById } from "../store/movieSlice";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const dispatch = useAppDispatch();
  const { singleMovie } = useAppSelector((state) => state.movie);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(fetchMovieById(parseInt(id)));
  }, [id]);

  return (
    <div>
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h5" fontWeight={500}>
          {singleMovie?.title}
        </Typography>
        <Grid container sx={{ borderRadius: 2, margin: 2, padding: 3 }}>
          <Grid item xs={4} margin={2}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${singleMovie?.poster_path}`}
              width={250}
            />
            <Typography variant="body2">
              Likes: {singleMovie?.vote_average}
            </Typography>
          </Grid>
          <Grid item xs={4} padding={2}>
            <Typography variant="subtitle1">{singleMovie?.overview}</Typography>
            <Typography variant="subtitle2">Genre:</Typography>
            {singleMovie?.genres?.map((g) => {
              return <Typography variant="subtitle2">{g.name}</Typography>;
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MovieDetail;
