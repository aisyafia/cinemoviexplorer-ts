import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Genre {
  id: number;
  name: string;
}

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres?: Genre[];
  vote_average?: number;
};

type MovieState = {
  movies: Movie[] | null;
  singleMovie: Movie | null;
};

const initialState: MovieState = {
  movies: [],
  singleMovie: null,
};

export const fetchMovies = createAsyncThunk<Movie[]>(
  "NP/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a0fdd7d682edade22bbce21b7ecf4554&language=en-US&page=1&region=NL"
      );
      // console.log("thunk works?", response.data.results);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      console.log("An error has occured:", error);
    }
  }
);

export const fetchMovieById = createAsyncThunk<Movie, number>(
  "NP/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a0fdd7d682edade22bbce21b7ecf4554`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUpcoming = createAsyncThunk<Movie[]>(
  "UP/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=a0fdd7d682edade22bbce21b7ecf4554&language=en-US&page=1&region=NL"
      );
      // console.log("thunk works?", response.data.results);
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
      // console.log("payload?", action.payload);
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      state.singleMovie = action.payload;
    });
    builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { allMoviesFetched } = movieSlice.actions;
export default movieSlice.reducer;
