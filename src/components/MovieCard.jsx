// src/components/MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group">
      <div className="relative w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <img
          src={movie.poster}
          alt={movie.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-2 left-2 bg-yellow-300 text-indigo-800 text-xs font-bold px-2 py-1 rounded-full shadow-md">
          {movie.year}
        </span>
      </div>
      <div className="p-4 flex flex-col justify-between h-[120px]">
        <h3 className="text-lg font-semibold text-gray-800">{movie.title}</h3>
        <Link
          to={`/movie/${movie.id}`}
          className="mt-2 inline-block text-sm text-indigo-600 font-medium hover:underline"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
