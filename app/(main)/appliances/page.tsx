"use client";

import AirService from "./Air/air";
import Brand from "./brand/brand";
import Category from "./categories/categories";
import KitchenAppliances from "./KitchenApp/kitchenAppliances";

export default function appliance() {
  return (
    <div className="mx-10 my-5 ">
      <div className=" w-full h-[50px] rounded-md bg-white  shadow-lg flex justify-center items-center font-[500] text-xl ">
        <h2> Home Appliances</h2>
      </div>
      <div className="my-6">
        <Brand />
      </div>
      <div className="my-5">
        <Category />
      </div>
      <div className="my-5">
        <AirService />
      </div>
      <div className="my-5">
        <KitchenAppliances />
      </div>
    </div>
  );
}
