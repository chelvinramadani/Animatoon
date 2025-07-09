// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Series } from "./pages/Series";
import SeriesDetail from "./pages/SeriesDetail";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/Navbar";

// Menu untuk Navbar
const menu = [
  { label: "Home", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "Series", path: "/series" },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar brand="AnimaToon" menuItems={menu} />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
