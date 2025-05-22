import React from "react";

import Range from "../../../../../../src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import SellerScore from "@/src/components/sellerScore/score";
import Shipped from "@/src/components/shipped/shipped";
import Discount from "@/src/components/discount/discount";
import Category from "../category/category";
import Color from "@/src/components/color/color";
import Sizes from "@/src/components/Sizes/sizes";
import ProductsType from "./components/ProductsType";

export default function HisenseSidebar() {
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

        {/* seller score */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <SellerScore />
          </div>
        </div>

        {/* Shipped */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Shipped />
          </div>
        </div>

        {/* color */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Color />
          </div>
        </div>

        {/* size */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Sizes />
          </div>
        </div>

        {/* discount */}
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
      </div>
    </div>
  );
}
