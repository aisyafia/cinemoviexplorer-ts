import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NowPlaying from "./pages/NowPlaying";
import ComingSoon from "./pages/ComingSoon";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/soon" element={<ComingSoon />} />
      </Routes>

      <h1>Movie Discovery</h1>
    </div>
  );
}

export default App;
