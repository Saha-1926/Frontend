import React from "react";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import { Divider } from "@mui/material";

const ProductDetails = () => {
  return (
    <div className="px-5 lg:px-20 pt-10">

      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            className="w-full lg:w-[80%] rounded-md object-cover"
            src="http://res.cloudinary.com/dxoqwusir/image/upload/v1727451205/SoftSilkZariBanarasiSaree_4_fyohzg.jpg"
            alt="product"
          />
        </div>

        {/* RIGHT SIDE - DETAILS */}
<div className="space-y-4">

  {/* BRAND */}
  <h2 className="text-xl font-semibold text-gray-800">
    Raam Clothing
  </h2>

  {/* PRODUCT NAME */}
  <p className="text-gray-500 text-sm">
    Silk Blend Kanjeevaram Saree
  </p>

  {/* RATINGS */}
  <div className="flex items-center gap-2 text-sm">
    <span className="bg-green-600 text-white px-2 py-[2px] rounded">
      4 ★
    </span>
    <span className="text-gray-500">358 Ratings</span>
  </div>

  {/* PRICE */}
  <div className="flex items-center gap-3">
    <span className="text-2xl font-bold">₹1149</span>
    <span className="line-through text-gray-400">₹1899</span>
    <span className="text-green-600 font-medium">39% off</span>
  </div>

  {/* TAX INFO */}
  <p className="text-sm text-gray-600">
    Inclusive of all taxes. Free Shipping above ₹1500.
  </p>

  {/* FEATURES */}
  <div className="space-y-2 text-sm text-gray-700">

    <p>✔ Authentic & Quality Assured</p>

    <p>✔ 100% money back guarantee</p>

    <p>✔ Free Shipping & Returns</p>

    <p>✔ Pay on delivery might be available</p>

  </div>

  {/* QUANTITY */}
  <div>
    <p className="font-medium mb-2">QUANTITY:</p>

    <div className="flex items-center gap-3">
      <button className="px-3 py-1 border">-</button>
      <span>1</span>
      <button className="px-3 py-1 border">+</button>
    </div>
  </div>

  {/* BUTTONS */}
  <div className="flex gap-4 mt-4">

    <button className="bg-green-600 text-white px-6 py-3 rounded">
      ADD TO BAG
    </button>

    

  </div>
  <div className="mt-5">
  <p className="text-sm text-gray-600 leading-relaxed">
    The saree comes with an unstitched blouse piece. The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.
  </p>
  <div className="mt-12 space-y-5">
  <ReviewCard />
  <Divider />
</div>
    </div>
        </div>

        </div>
          <div className="mt-20">
    <h1 className="text-lg font-bold">Similar Products</h1>

    <div className="pt-5">
      <SimilarProduct />
    </div>
  </div>
        </div>
  );
};

export default ProductDetails;