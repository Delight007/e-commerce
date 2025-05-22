"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import BrandName from "../../brand/brandName";

export default function DropDownBrand() {
  return (
    <div className="w-full">
      <div className="">
        {/* <div className="flex border w-full h-[35px] p-1 rounded-2xl">
          <IoMdSearch className="text-2xl flex justify-center items-center" />
          <input
            type="search"
            className="w-full h-full outline-none pl-1"
            placeholder=" Search "
          />
        </div> */}
      </div>

      {/* brand names */}
      <div className="overflow-y-auto overflow-x-hidden h-[250px]  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-1">
        <BrandName />
      </div>
    </div>
  );
}
