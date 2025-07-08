import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/tomjerry.png";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const teaserMovies = [
  {
    id: 1,
    title: "Toy Story",
    year: 1995,
    poster: "https://images-cdn.ubuy.co.id/635083b79f2bc2255b668924-toy-story-poster-woody-and-buzz-pixar.jpg",
  },
  {
    id: 2,
    title: "Frozen",
    year: 2013,
    poster: "https://images-cdn.ubuy.co.id/63599fbd272b6e5380399653-poster-stop-online-frozen-disney-movie.jpg",
  },
  {
    id: 3,
    title: "Cars",
    year: 2006,
    poster: "https://images-cdn.ubuy.co.id/6455262536eacb58ff30e7b0-poster-stop-online-cars-disney-pixar.jpg",
  },
  {
    id: 4,
    title: "Cars 2",
    year: 2011,
    poster: "https://upload.wikimedia.org/wikipedia/id/7/7f/Cars_2_Poster.jpg",
  },
];

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Jelajahi Dunia <span className="text-yellow-300">Animasi</span>
            </h1>
            <p className="text-lg mb-6">
              Tonton film animasi favoritmu dari Disney, Pixar, dan lainnya.
              Kapan saja, di mana saja!
            </p>
            <Link
              to="/movies"
              className="bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
            >
              Lihat Film
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="AnimaToon Hero"
              className="w-full max-w-md mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Highlight Features as Cards (No icons) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Update Film Terbaru</h3>
              <p className="text-gray-600 text-sm">
                Film animasi baru setiap minggu, langsung dari studio favoritmu.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Tanpa Iklan</h3>
              <p className="text-gray-600 text-sm">
                Nikmati pengalaman nonton yang bebas gangguan iklan.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">Tersedia Subtitle</h3>
              <p className="text-gray-600 text-sm">
                Tonton dengan subtitle bahasa Indonesia & Inggris.
              </p>
            </div>
          </div>
        </section>

      {/* Teaser Movie List */}
      <section className="bg-gray-100 py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Film Populer</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-7xl mx-auto">
          {teaserMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray text-center py-14">
        <h3 className="text-2xl font-bold mb-3 text-indigo-700">Gabung dengan Ribuan Pecinta Animasi</h3>
        <p className="mb-5 text-gray-600">
          Mulai nonton sekarang dan rasakan dunia animasi tanpa batas!
        </p>
        <Link
          to="/movies"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Mulai Nonton Sekarang
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};
