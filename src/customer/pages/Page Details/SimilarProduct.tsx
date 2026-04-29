import React from "react";
import SimilarProductCard from "./SimilarProductCard";

const SimilarProduct = () => {
  return (
    <div className="p-5">

     

      {/* PRODUCT GRID */}
      <div className="flex flex-wrap justify-between gap-y-10 ">
        {[1,1,1,1,1,1,1,1].map((item, index) => (
          <SimilarProductCard key={index} />
        ))}
      </div>

    </div>
  );
};

export default SimilarProduct;