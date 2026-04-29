import React from "react";

const SimilarProductCard = () => {
  return (
<div className="w-[15rem] cursor-pointer hover:shadow-lg transition">      
      {/* IMAGE */}
      <img
  className="h-[20rem] w-full object-cover object-top cursor-pointer hover:shadow-lg transition"
        src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
        alt="men shirt"
      />

      {/* DETAILS */}
      <div className="p-3">
        <p className="font-semibold text-gray-800">Roadster</p>

        <p className="text-gray-500 text-sm">
          Casual Cotton Slim Fit Shirt
        </p>

        {/* PRICE */}
        <div className="flex gap-2 items-center">
          <p className="font-bold text-lg">₹799</p>
          <p className="line-through text-gray-400">₹1499</p>
          <p className="text-green-600 text-sm">46% off</p>
        </div>
      </div>

    </div>
  );
};

export default SimilarProductCard;