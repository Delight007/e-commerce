"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import BrandName from "./brandName";

export default function HeaterBrand() {
  return (
    <div>
      <div className="">
        <div className=" py-2">
          <h2 className="uppercase font-semibold text-[13px] ">Brand</h2>
        </div>
      </div>

      {/* brand names */}
      <div className="overflow-y-auto overflow-x-hidden h-[198px]  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-1">
        <BrandName />
      </div>
    </div>
  );
}
