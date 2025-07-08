// src/components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

// Data dummy film (nanti bisa di-fetch dari API)
const movies = [
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
    year: 2008,
    poster: "https://upload.wikimedia.org/wikipedia/id/7/7f/Cars_2_Poster.jpg",
  },
  {
    id: 5,
    title: "Toy Story 2",
    year: 2008,
    poster: "https://i.ebayimg.com/images/g/LZkAAOSwn1RmtPaH/s-l1200.jpg",
  },
  {
    id: 6,
    title: "The Incridibles",
    year: 2008,
    poster: "https://cdn.posteritati.com/posters/000/000/058/702/the-incredibles-md-web.jpg",
  },
  {
    id: 7,
    title: "Finding Nemo",
    year: 2010,
    poster: "https://i5.walmartimages.com/seo/FINDING-NEMO-11x17-Framed-Movie-Poster_2a1da374-a67b-48c5-9b7c-c35c0e5bf280.5b2ac0c5b03b1cc152bd4251a4dc8a12.jpeg",
  },
];

const MovieList = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
