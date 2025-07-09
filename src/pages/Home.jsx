import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/tomjerry.png";
import Footer from "../components/Footer";

// Custom hook untuk count-up animasi
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // untuk 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count.toLocaleString();
};

export const Home = () => {
  const filmCount = useCountUp(120);
  const studioCount = useCountUp(15);
  const userCount = useCountUp(10000);

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

      {/* Highlight Features */}
      <section className="py-16 bg-gray">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Update Film Terbaru</h3>
            <p className="text-gray-600 text-sm">
              Film animasi baru setiap minggu, langsung dari studio favoritmu.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Tanpa Iklan</h3>
            <p className="text-gray-600 text-sm">
              Nikmati pengalaman nonton yang bebas gangguan iklan.
            </p>
          </div>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow text-center transition-all duration-300 transform hover:shadow-lg hover:-translate-y-2 hover:bg-indigo-100">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Tersedia Subtitle</h3>
            <p className="text-gray-600 text-sm">
              Tonton dengan subtitle bahasa Indonesia & Inggris.
            </p>
          </div>
        </div>
      </section>

      {/* Testimoni Pengguna */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-purple-700">Apa Kata Mereka?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alya",
              comment: "AnimaToon bikin nostalgia masa kecil! Nonton jadi lebih menyenangkan.",
            },
            {
              name: "Rafi",
              comment: "Koleksi filmnya lengkap, tampilannya rapi, dan tanpa iklan. Love it!",
            },
            {
              name: "Dina",
              comment: "Anak-anak saya suka banget nonton di sini. Subtitle-nya juga membantu.",
            },
          ].map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md border border-transparent hover:border-indigo-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-gray-700 italic mb-4">“{testi.comment}”</p>
              <h4 className="font-bold text-indigo-600">{testi.name}</h4>
            </div>
          ))}
        </div>
      </section>


            {/* Statistik + CTA Section */}
      <section className="bg-gray py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-10">AnimaToon dalam Angka</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-3xl font-bold text-purple-700">{filmCount}+</h3>
            <p className="mt-2 text-gray-600">Film Animasi</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-3xl font-bold text-purple-700">{studioCount}+</h3>
            <p className="mt-2 text-gray-600">Studio Ternama</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
            <h3 className="text-3xl font-bold text-purple-700">{userCount}+</h3>
            <p className="mt-2 text-gray-600">Pengguna Aktif</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-indigo-800 mb-3">Gabung dengan Ribuan Pecinta Animasi</h3>
        <p className="mb-5 text-gray-700">
          Mulai nonton sekarang dan rasakan dunia animasi tanpa batas!
        </p>
        <Link
          to="/movies"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Mulai Nonton Sekarang
        </Link>
      </section>
      <Footer />
    </div>
  );
};
