import React from "react";
import BlenderCategory from "./category";
import BlenderCategory2 from "./category2";

export default function CategoryWrapper() {
  return (
    <div className="bg-white">
      <div className="bg-yellow-200 h-[50px] flex items-center justify-center ">
        <h1 className="text-xl font-semibold ">Home & Appliances Categories</h1>
      </div>
      <div>
        <BlenderCategory />
        <BlenderCategory2 />
      </div>
    </div>
  );
}
