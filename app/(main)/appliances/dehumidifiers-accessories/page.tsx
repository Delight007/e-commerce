import React from "react";
import DehumidifierSidebar from "./sidebar";
import DehumidifierProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
export default function page() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
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
    </section>
    // </div>
  );
}
