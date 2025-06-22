import React from "react";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Range from "@/src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import Category from "./components/category";
import Discount from "@/src/components/discount/discount";

export default function RoyalSidebar() {
  return (
    <div>
      <div className="w-[285px] rounded-md  bg-white">
        <div className="w-full  border-b ">
          <div className="">
            <Category />
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

        {/* seller score */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
}
