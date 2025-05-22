import React from "react";
import ACsidebar from "./sidebar";
import ACProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function airConditioners() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <ACsidebar />
        </div>

        {/* main products */}
        <div>
          <ACProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
