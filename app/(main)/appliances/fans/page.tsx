import React from "react";
import FanSidebar from "./sidebar";
import FanProducts from "./maniProducts";
import CategoryWrapper from "./category/categoryWrapper";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-5">
          <CategoryWrapper />
        </div>
        <div className="w-full flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <FanSidebar />
          </div>

          {/* main products */}
          <div>
            <FanProducts />
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
