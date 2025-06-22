import React from "react";
import HeaterSidebar from "./sidebar";
import HeaterProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <HeaterSidebar />
        </div>
        {/* main products */}
        <div>
          <HeaterProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
