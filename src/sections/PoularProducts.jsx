import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PoularProducts = () => {
  return (
    <section id="products" className="  max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat">
          Nike's Air Max, with groundbreaking cushioning, and the timeless Air
          Force 1, introduced in 1982, epitomize iconic style. The React Element
          series showcases futuristic aesthetics and responsive cushioning.
          Nike's commitment to innovation is evident in the Free line, offering
          a natural feel for workouts. Collaborations with Michael Jordan
          birthed the globally adored Air Jordan line, emphasizing excellence
          and style.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-14">
        {products.map((items) => (
          <PopularProductCard key={items.name} {...items} />
        ))}
      </div>
    </section>
  );
};

export default PoularProducts;
