import React from "react";
import AirFryerSidebar from "./sidebar";
import AirFryerProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <AirFryerSidebar />
        </div>

        {/* main products */}
        <div>
          <AirFryerProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
