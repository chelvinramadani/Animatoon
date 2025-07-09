// src/pages/MovieDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/api/v1/movies/${id}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil detail film:", err);
        setError("Film tidak ditemukan.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-10 animate-pulse">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-[300px] h-[450px] bg-gray-300 rounded-xl" />
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-300 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-20 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-300 rounded w-1/2" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !movie) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">
          Film tidak ditemukan 😢
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <img
          src={
            movie.image?.startsWith("http")
              ? movie.image
              : `https://m.media-amazon.com/images/M/${movie.image}`
          }
          alt={movie.title}
          className="w-full md:w-[300px] rounded-xl shadow-lg object-cover max-h-[500px]"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x450?text=No+Image";
          }}
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">
            {movie.title}
          </h1>
          <p className="text-gray-600 mb-1">
            Tahun Rilis: {movie.year?.replace(/[()]/g, "") || "-"}
          </p>
          <p className="text-gray-600 mb-1">
            Durasi: {movie.runtime || "-"}
          </p>
          <p className="text-gray-600 mb-1">Genre: {movie.genre || "-"}</p>
          <p className="text-gray-600 mb-1">Rating: {movie.rating || "-"}</p>
          <p className="text-gray-600 mb-1">
            Metascore: {movie.metascore || "-"}
          </p>
          <p className="text-gray-600 mb-1 whitespace-pre-line">
            Sutradara: {movie.directors || "-"}
          </p>
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            Pemeran: {movie.stars || "-"}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {movie.summary || "Deskripsi tidak tersedia."}
          </p>

          {movie.link && (
            <a
              href={`https://www.imdb.com${movie.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-indigo-600 hover:underline"
            >
              Lihat di IMDb
            </a>
          )}

          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
