import React from "react";
import DeepFryerSidebar from "./sidebar";
import DeepFryerProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <DeepFryerSidebar />
        </div>

        {/* main products */}
        <div>
          <DeepFryerProducts />
        </div>
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
}
