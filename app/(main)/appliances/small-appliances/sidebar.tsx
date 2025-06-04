import React from "react";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Range from "@/src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import OfficialStore from "@/src/components/officialStore/officialStore";
import SellerScore from "@/src/components/sellerScore/score";
import Category from "./components/category";
import SmallAppliancesBrand from "./components/brand/brand";
import Discount from "@/src/components/discount/discount";
import Color from "./components/color/color";
import Material from "@/src/components/material/material";

export default function SmallAppliancesSidebar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
        {/* category */}
        <div className="w-full border-b">
          <Category />
        </div>

        {/* Brand */}
        <div className="w-full h-[280px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <SmallAppliancesBrand />
          </div>
        </div>

        {/* Matrial family */}
        <div className="w-full h-[280px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <Material />
          </div>
        </div>

        {/* Price range */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-2">
            <Range />
          </div>
        </div>

        {/* Discount */}
        <div className="w-full  border-b px-2 pt-1">
          <Discount />
        </div>

        {/* Rating */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Rating />
          </div>
        </div>

        {/* Color */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Color />
          </div>
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

        {/* XDdelivery */}
        <div className="w-full  border-b px-2 pt-1">
          <Xdelivery />
        </div>

        {/* official store */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <OfficialStore />
          </div>
        </div>
      </div>
    </div>
  );
}
