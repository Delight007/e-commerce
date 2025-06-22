import React from "react";
import RiceCookerSidebar from "./sidebar";
import RiceCookerProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <RiceCookerSidebar />
        </div>

        {/* main products */}
        <div>
          <RiceCookerProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
