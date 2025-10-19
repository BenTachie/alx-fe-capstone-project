import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-3xl mx-auto mt-6"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="All treatments and venues"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Current location"
        className="w-44 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-black text-white rounded-lg font-semibold hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
