import "./App.css";
import NowPlaying from "./pages/NowPlaying";
import ComingSoon from "./pages/ComingSoon";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>WHAT'S PLAYIN' NL?</h1>
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="/soon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
