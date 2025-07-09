import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const {
    movieId,
    title,
    year,
    image,
    genre,
    rating
  } = movie;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
      <img
        src={image?.startsWith("http") ? image : "/placeholder.jpg"}
        alt={title}
        className="w-full h-[400px] object-cover"
        onError={(e) => {
          e.target.src = "/placeholder.jpg";
        }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-indigo-700 truncate" title={title}>
          {title}
        </h3>
        <p className="text-sm text-gray-600">{year?.replace(/[()]/g, "") || "-"}</p>
        <p className="text-sm text-gray-600">{genre || "Genre tidak diketahui"}</p>
        <p className="text-sm text-gray-600 mb-2">⭐ {rating || "NR"}</p>
        {movieId && (
          <Link
            to={`/movie/${movieId}`}
            className="text-sm text-indigo-600 hover:underline font-medium"
          >
            Lihat Detail
          </Link>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
