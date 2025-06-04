import React from "react";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Range from "@/src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import OfficialStore from "@/src/components/officialStore/officialStore";
import SellerScore from "@/src/components/sellerScore/score";
import Category from "./components/category";
import FanBrand from "./components/brand/brand";
import Color from "./components/color/color";
import Material from "@/src/components/material/material";

// import FridgesFreezersBrand from "./components/brand/brand";

export default function FanSidebar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
        {/* category */}
        <div className="w-full border-b">
          <Category />
        </div>

        {/* Color */}
        <div className="w-full h-[250px] border-b px-2 pt-1 ">
          <div className="px-2 pt-1">
            <Color />
          </div>
        </div>

        {/* Brand */}
        <div className="w-full h-[290px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <FanBrand />
          </div>
        </div>

        {/* material family */}
        <div className="w-full h-[290px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <Material />
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
            <SellerScore />
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
