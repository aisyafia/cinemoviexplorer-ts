import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { Container } from "@mui/material";
import { fetchUpcoming } from "../store/movieSlice";
import AllMovies from "../components/AllMovies";

const ComingSoon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUpcoming());
  }, [dispatch]);

  return (
    <div>
      <h2>Coming soon to your area:</h2>
      <Container>
        <AllMovies />
      </Container>
    </div>
  );
};

export default ComingSoon;
