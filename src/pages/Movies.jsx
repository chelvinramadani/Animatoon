import React from "react";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export const Movies = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-white-700">Semua Film Kartun</h1>
        <p className="text-white-600 mt-2">Nikmati koleksi lengkap film animasi favorit sepanjang masa</p>
      </section>

      {/* Movie List */}
      <MovieList />

      {/* Footer */}
      <Footer />
    </div>
  );
};