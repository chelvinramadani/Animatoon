import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-500 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-2">AnimaToon</h2>
          <p className="text-sm leading-relaxed text-indigo-100">
            Temukan film kartun & animasi favoritmu dan nikmati pengalaman streaming seru tanpa gangguan. Update setiap minggu!
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-sm text-indigo-100">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/popular" className="hover:underline">Film Populer</a></li>
            <li><a href="/genres" className="hover:underline">Genre</a></li>
            <li><a href="#" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Tentang */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Tentang Kami</h3>
          <p className="text-sm leading-relaxed text-indigo-100">
            AnimaToon dibuat oleh tim pecinta animasi untuk menyebarkan semangat dan cinta terhadap kartun dan film animasi ke seluruh dunia.
          </p>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-indigo-100">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">AnimaToon</span>. All rights reserved. <br />
          Made with <span className="text-pink-300">❤️</span> for animation lovers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
