import React from "react";
import Card from "../molecules/Card";
import data from "../../data/businesses.json";

function Recommended() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Recommended</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((biz) => (
          <Card
            key={biz.id}
            name={biz.name}
            city={biz.city}
            category={biz.category}
            image={biz.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Recommended;
