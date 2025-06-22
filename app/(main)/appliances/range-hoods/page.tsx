import React from "react";
import RangeSidebar from "./sidebar";
import RangeProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <RangeSidebar />
        </div>

        {/* main products */}
        <div>
          <RangeProducts />
        </div>
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
}
