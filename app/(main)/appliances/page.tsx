"use client";
import Products from "./AllProducts/products";
import AppCategory from "./category/appCategory";

export default function appliance() {
  return (
    <div>
      <div className="">
        <div className=" w-full h-[50px] rounded-md border bg-white mt-3 shadow-lg flex justify-center items-center font-[500] text-xl ">
          <h2> Home Appliances</h2>
        </div>

        {/* Category */}
        <div>
          <AppCategory />
        </div>

        {/* All Appliances Products */}
        <div className="">
          <Products />
        </div>
      </div>
    </div>
  );
}
