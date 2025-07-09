// src/pages/SeriesDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const seriesData = [
  {
    id: 1,
    title: "Avatar: The Last Airbender",
    year: 2005,
    poster: "https://i.pinimg.com/736x/00/57/d6/0057d68a81285aa728adfce3ea38ce4e.jpg",
    description:
      "Aang, the last surviving Airbender, must master all four elements to bring peace to a war-torn world.",
  },
  {
    id: 2,
    title: "Adventure Time",
    year: 2010,
    poster: "https://i.ebayimg.com/images/g/mnQAAOSwA8pgDxKe/s-l1200.jpg",
    description:
      "Finn the Human and Jake the Dog explore the Land of Ooo and embark on surreal adventures.",
  },
  {
    id: 3,
    title: "SpongeBob SquarePants",
    year: 1999,
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13846038_b_v8_aa.jpg",
    description:
      "SpongeBob lives in a pineapple under the sea and works at the Krusty Krab in Bikini Bottom.",
  },
  {
    id: 4,
    title: "Tom and Jerry Tales",
    year: 2011,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTFlOGJmMDUtNWU2Yy00Njc0LWEyMjgtMWMxYTU5MzhiMTdjXkEyXkFqcGc@._V1_.jpg",
    description:
      "The iconic cat-and-mouse duo get into hilarious misadventures in this rebooted animated series.",
  },
];

const SeriesDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const series = seriesData.find((item) => item.id === parseInt(id));

  if (!series) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Series tidak ditemukan 😢</h2>
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
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={series.poster}
          alt={series.title}
          className="w-full md:w-[300px] rounded-xl shadow-lg object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-indigo-700 mb-2">{series.title}</h1>
          <p className="text-gray-600 mb-2">Tahun: {series.year}</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {series.description || "Deskripsi tidak tersedia."}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
