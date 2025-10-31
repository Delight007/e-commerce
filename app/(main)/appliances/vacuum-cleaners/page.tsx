import React from "react";
import VacuumSidebar from "./sidebar";
import VacuumProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
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
    </section>
    // </div>
  );
}
