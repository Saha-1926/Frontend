import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="p-5">

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-center mb-10">
        MEN SHIRTS
      </h1>

      {/* PRODUCT GRID */}
      <div className="flex flex-wrap justify-between gap-y-10 ">
        {[1,1,1,1,1,1,1,1].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>

    </div>
  );
};

export default Product;