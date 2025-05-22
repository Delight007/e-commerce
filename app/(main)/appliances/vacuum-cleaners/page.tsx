import React from "react";
import VacuumSidebar from "./sidebar";
import VacuumProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <VacuumSidebar />
        </div>

        {/* main products */}
        <div>
          <VacuumProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
