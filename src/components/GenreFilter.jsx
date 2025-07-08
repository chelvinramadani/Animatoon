import React from "react";

const GenreFilter = ({ selectedGenre, onChange }) => {
  const genres = [
    "All",
    "Adventure",
    "Comedy",
    "Fantasy",
    "Family",
    "Musical",
    "Sci-Fi",
  ];

  return (
    <div className="mb-6">
      <select
        value={selectedGenre}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            🎬 {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
