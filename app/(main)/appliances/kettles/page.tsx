import React from "react";
import KettleSidebar from "./sidebar";
import KettleProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <KettleSidebar />
        </div>

        {/* main products */}
        <div>
          <KettleProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
