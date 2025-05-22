import React from "react";

import Rating from "@/src/components/productRating/rating";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Category from "./components/category";
import Range from "@/src/components/priceRange/range";
import Color from "./components/color";
import Discount from "@/src/components/discount/discount";
import ProductsType from "./components/productType";

export default function BinatoneSidebar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
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
        {/* color */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Color />
          </div>
        </div>
        {/* Discount */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
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
      </div>
    </div>
  );
}
