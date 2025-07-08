import React from "react";
import { Link } from "react-router-dom";

const SeriesCard = ({ series }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={series.poster}
          alt={series.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-indigo-700">{series.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{series.year}</p>
        <Link
          to={`/series/${series.id}`}
          className="text-sm text-indigo-600 hover:underline"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default SeriesCard;
