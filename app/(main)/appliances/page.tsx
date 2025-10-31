"use client";
import AllProducts from "./appProducts/alProducts";

import AppCategory from "./category/appCategory";

export default function Appliance() {
  return (
    // <div className="w-full">
    <section className="mx-auto px-6 lg:px-12 max-w-7xl">
      <div className=" w-full h-[50px] rounded-md border bg-white mt-3 shadow-lg flex justify-center items-center font-[500] text-xl ">
        <h2> Home Appliances</h2>
      </div>

      {/* Category */}
      <div className="my-5">
        <AppCategory />
      </div>

      {/* All Appliances Products */}
      <div className="my-5">
        <AllProducts />
      </div>
    </section>
    // </div>
  );
}
