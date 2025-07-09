// src/components/MovieList.jsx
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/api/v1/movies/all")
      .then((res) => {
        const filtered = res.data.filter((movie) => {
          const yearNumber = parseInt(movie.year?.replace(/[()]/g, ""));
          return yearNumber >= 1990;
        });
        setMovies(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setError("Gagal memuat data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Skeleton loading
    return (
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg bg-gray-200 animate-pulse h-[450px] w-full"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error)
    return <p className="text-center text-red-500 py-20">{error}</p>;

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
