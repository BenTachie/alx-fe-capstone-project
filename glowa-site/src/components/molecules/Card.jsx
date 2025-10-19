import React from "react";

function Card({ name, city, category, image }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition duration-200 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{city}</p>
        <p className="text-gray-400 text-sm mt-1">{category}</p>
      </div>
    </div>
  );
}

export default Card;
