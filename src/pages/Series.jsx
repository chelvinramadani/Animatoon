import React from "react";
import SeriesList from "../components/SeriesList";
import Footer from "../components/Footer";

export const Series = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Serial Animasi Populer</h1>
        <p className="text-lg text-white/90">Tonton serial kesayanganmu kapan saja!</p>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <SeriesList />
      </section>

      <Footer />
    </div>
  );
};