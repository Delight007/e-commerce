import React from "react";
import DishWasherSidebar from "./sidebar";
// import DishWasherProducts from "./mainProducts";
import HumidifierSidebar from "./sidebar";
import HumidifierProducts from "./mainProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <HumidifierSidebar />
        </div>

        {/* main products */}
        <div>
          <HumidifierProducts />
        </div>
      </div>
    </div>
  );
}
