"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import MaterialDetails from "./materialDetails";

export default function Material() {
  return (
    <div>
      <div className="">
        <div className=" py-2">
          <h2 className="uppercase font-semibold text-[13px] ">
            Material Family
          </h2>
        </div>

        <div className="flex border w-[250px] h-[35px] p-1 rounded-2xl">
          <IoMdSearch className="text-2xl flex justify-center items-center" />
          <input
            type="search"
            className="w-full h-full outline-none pl-1"
            placeholder=" Search "
          />
        </div>
      </div>

      {/* Material */}
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden h-[195px] mt-1">
        <MaterialDetails />
      </div>
    </div>
  );
}
