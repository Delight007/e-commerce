import React from "react";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Shipped from "@/src/components/shipped/shipped";
import Range from "@/src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import OfficialStore from "@/src/components/officialStore/officialStore";
import SellerScore from "@/src/components/sellerScore/score";
import Category from "./components/category";
import RangeBrand from "./components/brand/brand";

// import FridgesFreezersBrand from "./components/brand/brand";

export default function RangeSidebar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
        {/* category */}
        <div className="w-full border-b">
          <Category />
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

        {/* Brand */}
        <div className="w-full h-[280px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <RangeBrand />
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
