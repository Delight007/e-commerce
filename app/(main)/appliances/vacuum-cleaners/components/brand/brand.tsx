"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import BrandName from "./brandName";

export default function VacuumBrand() {
  return (
    <div>
      <div className="">
        <div className=" py-2">
          <h2 className="uppercase font-semibold text-[13px] ">Brand</h2>
        </div>

        <div className="flex border w-[262px] h-[35px] p-1 rounded-2xl">
          <IoMdSearch className="text-2xl flex justify-center items-center" />
          <input
            type="search"
            className="w-full h-full outline-none pl-1"
            placeholder=" Search "
          />
        </div>
      </div>

      {/* brand names */}
      <div className="overflow-y-auto overflow-x-hidden h-[198px]  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-1">
        <BrandName />
      </div>
    </div>
  );
}
