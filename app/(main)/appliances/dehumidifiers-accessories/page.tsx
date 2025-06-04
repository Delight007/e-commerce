import React from "react";
import DehumidifierSidebar from "./sidebar";
import DehumidifierProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <DehumidifierSidebar />
        </div>
        {/* main products */}
        <div>
          <DehumidifierProducts />
        </div>
      </div>
      <div>
        <MoreProducts />
      </div>
    </div>
  );
}
