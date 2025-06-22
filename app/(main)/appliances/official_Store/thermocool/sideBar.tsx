import React from "react";

import Rating from "@/src/components/productRating/rating";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import SellerScore from "@/src/components/sellerScore/score";
import Shipped from "@/src/components/shipped/shipped";
import Discount from "@/src/components/discount/discount";
// import Color from "@/src/components/color/color";
import Sizes from "@/src/components/Sizes/sizes";
import Category from "./components/category";
import Color from "./components/color";
import Range from "@/src/components/priceRange/range";
import ProductsType from "./components/productTypes";
// import ProductsType from "./components/ProductsType";

export default function ThermocoolSidebar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
        <div className="w-full  border-b ">
          <div className="">
            <Category />
          </div>
        </div>

        {/* color */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Color />
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

        {/* Price range */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Range />
          </div>
        </div>

        {/* Rating */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Rating />
          </div>
        </div>

        {/* Product Type */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <ProductsType />
          </div>
        </div>
      </div>
    </div>
  );
}
