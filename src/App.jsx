import "./App.css";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav";
import { Routes, Route } from "react-router-dom";
import Filters from "./Components/FilterMovies";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/Rating" element={<Filters />} />
      </Routes>
    </div>
  );
}

export default App;
