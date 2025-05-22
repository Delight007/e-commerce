import React from "react";
import JuicerSidebar from "./sidebar";
import JuicerProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <JuicerSidebar />
        </div>

        {/* main products */}
        <div>
          <JuicerProducts />
        </div>
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
}
