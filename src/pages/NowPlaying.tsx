import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { fetchMovies } from "../store/movieSlice";
import { Container } from "@mui/material";
import AllMovies from "../components/AllMovies";

const NowPlaying: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container>
      <h2>Now Playing in your area:</h2>
      <AllMovies />
    </Container>
  );
};

export default NowPlaying;
