"use client";
import AllProducts from "./allProducts/allProducts";
// import AllProducts from "./allProducts/all-products";
import AppCategory from "./category/appCategory";

export default function Appliance() {
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
        <div>
          <AllProducts />
        </div>
      </div>
    </div>
  );
}
