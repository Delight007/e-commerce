import React from "react";
import CookerPressureProducts from "./mainProducts";
import CookerPressureSidebar from "./sidebar";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <CookerPressureSidebar />
        </div>

        {/* main products */}
        <div>
          <CookerPressureProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
