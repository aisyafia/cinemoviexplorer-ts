import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genre_ids?: number[];
  vote_average: number;
}

type MovieState = {
  movies: Movie[] | null;
};

const initialState: MovieState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk<Movie[]>(
  "movies/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a0fdd7d682edade22bbce21b7ecf4554&language=en-US&page=1&region=NL"
      );
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      console.log("An error has occured:", error);
    }
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    allMoviesFetched: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { allMoviesFetched } = movieSlice.actions;
export default movieSlice.reducer;
