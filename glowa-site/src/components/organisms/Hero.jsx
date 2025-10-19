import React from "react";
import SearchBar from "../molecules/SearchBar";

function Hero() {
  const handleSearch = (params) => {
    console.log("Search params:", params);
  };

  return (
    <section className="bg-gradient-to-tr from-pink-100 via-purple-100 to-white py-24 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold font-serif leading-tight mb-6">
        Book local beauty and <br /> wellness services
      </h1>
      <p className="text-gray-600 mb-8">
        Find and book treatments from verified local professionals.
      </p>
      <SearchBar onSearch={handleSearch} />
      <p className="mt-6 text-sm text-gray-500">
        15,560 appointments booked today
      </p>
    </section>
  );
}

export default Hero;
