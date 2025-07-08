import React from "react";
import SeriesCard from "./SeriesCard";

const seriesData = [
  {
    id: 1,
    title: "Avatar: The Last Airbender",
    year: 2005,
    poster: "https://i.pinimg.com/736x/00/57/d6/0057d68a81285aa728adfce3ea38ce4e.jpg",
  },
  {
    id: 2,
    title: "Adventure Time",
    year: 2010,
    poster: "https://i.ebayimg.com/images/g/mnQAAOSwA8pgDxKe/s-l1200.jpg",
  },
  {
    id: 3,
    title: "SpongeBob SquarePants",
    year: 1999,
    poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13846038_b_v8_aa.jpg",
  },
  {
    id: 4,
    title: "Tom and Jerry Tales",
    year: 2011,
    poster: "https://m.media-amazon.com/images/M/MV5BNTFlOGJmMDUtNWU2Yy00Njc0LWEyMjgtMWMxYTU5MzhiMTdjXkEyXkFqcGc@._V1_.jpg",
  },
];

const SeriesList = () => {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {seriesData.map((series) => (
          <SeriesCard key={series.id} series={series} />
        ))}
      </div>
    </div>
  );
};

export default SeriesList;
