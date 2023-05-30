import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NowPlaying from "./pages/NowPlaying";
import ComingSoon from "./pages/ComingSoon";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>WHAT'S PLAYIN' NL?</h1>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
