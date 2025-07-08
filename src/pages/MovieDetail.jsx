// src/pages/MovieDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data dummy yang sama dengan MovieList
const movies = [
  {
    id: 1,
    title: "Toy Story",
    year: 1995,
    description:
      "Petualangan Woody dan Buzz Lightyear dalam dunia mainan yang penuh aksi dan emosi.",
    poster: "https://images-cdn.ubuy.co.id/635083b79f2bc2255b668924-toy-story-poster-woody-and-buzz-pixar.jpg",
    },
  {
    id: 2,
    title: "Frozen",
    year: 2013,
    description:
      "Ikuti kisah Elsa dan Anna dalam kerajaan Arendelle dengan lagu ikonik 'Let It Go'.",
    poster: "https://images-cdn.ubuy.co.id/63599fbd272b6e5380399653-poster-stop-online-frozen-disney-movie.jpg",
    },
  {
    id: 3,
    title: "Cars",
    year: 2006,
    description:
      "Film ini bercerita tentang Lightning McQueen, seorang pembalap mobil muda yang sombong dan ambisius, yang tersesat di kota terpencil bernama Radiator Springs. Di sana, ia belajar tentang arti persahabatan, keluarga, dan pentingnya menghargai hal-hal sederhana dalam hidup, jauh dari hiruk pikuk dunia balap",
    poster: "https://images-cdn.ubuy.co.id/6455262536eacb58ff30e7b0-poster-stop-online-cars-disney-pixar.jpg",
    },
  {
    id: 4,
    title: "Cars 2",
    year: 2011,
    description:
      " Film ini melanjutkan petualangan Lightning McQueen dan Mater yang kali ini terlibat dalam ajang balap internasional bernama World Grand Prix, namun Mater secara tak terduga terlibat dalam misi mata-mata. ",
    poster: "https://upload.wikimedia.org/wikipedia/id/7/7f/Cars_2_Poster.jpg",
    },
];

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Film tidak ditemukan 😢</h2>
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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="text-left">
          <h1 className="text-3xl font-bold text-indigo-700">{movie.title}</h1>
          <p className="text-sm text-gray-500 mb-2">Tahun Rilis: {movie.year}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{movie.description}</p>
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
