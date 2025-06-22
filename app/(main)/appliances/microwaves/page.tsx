import React from "react";
import CategoryWrapper from "./category/categoryWrapper";
import MicrowaveSidebar from "./sidebar";
import MicrowaveProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="mb-5">
        <CategoryWrapper />
      </div>
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <MicrowaveSidebar />
        </div>

        {/* main products */}
        <div>
          <MicrowaveProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
