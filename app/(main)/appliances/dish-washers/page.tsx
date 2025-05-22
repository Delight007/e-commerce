import React from "react";
import DishWasherSidebar from "./sidebar";
import DishWasherProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <DishWasherSidebar />
        </div>

        {/* main products */}
        <div>
          <DishWasherProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
