import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NowPlaying from "./pages/NowPlaying";

function App() {
  return (
    <div className="App">
      <h1>Movie Discovery</h1>
      <NowPlaying />
    </div>
  );
}

export default App;
