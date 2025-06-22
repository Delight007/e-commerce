import React from "react";
// import Category from "./components/EcoflowCategory";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Range from "@/src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import SellerScore from "@/src/components/sellerScore/score";
import Category from "./components/nexusCategory";
import ProductsType from "./components/productType";
import Discount from "./components/discountPercentage";
import Color from "./components/color";
import Sizes from "./components/Sizes";
// import Color from "./components/color/color";
// import ProductsType from "./components/productType";

export default function NexusSidebar() {
  return (
    <div>
      <div className="w-[285px] rounded-md  bg-white">
        <div className="w-full  border-b ">
          <div className="">
            <Category />
          </div>
        </div>

        {/* Price range */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Range />
          </div>
        </div>

        {/* seller score */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Discount />
          </div>
        </div>

        {/* Product Type */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <ProductsType />
          </div>
        </div>

        {/* Rating */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Rating />
          </div>
        </div>

        {/* XDdelivery */}
        <div className="w-full  border-b px-2 pt-1">
          <Xdelivery />
        </div>

        {/* Shipped */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Shipped />
          </div>
        </div>

        {/* color */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Color />
          </div>
        </div>

        {/* color */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Sizes />
          </div>
        </div>
      </div>
    </div>
  );
}
