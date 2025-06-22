import React from "react";
import WashingCategory from "./category";
import WashingCategory2 from "./category2";

export default function CategoryWrapperSmall() {
  return (
    <div>
      <div className="bg-yellow-200 w-full h-[50px] flex justify-center items-center font-semibold text-xl">
        Home & Appliances Categories
      </div>
      <div className="bg-white">
        <WashingCategory />
        <WashingCategory2 />
      </div>
    </div>
  );
}
