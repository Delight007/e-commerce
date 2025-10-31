import React from "react";
import CategoryWrapper from "./category/categoryWrapper";
import BlenderSidebar from "./sidebar";
import BlenderProducts from "./mainProducts";
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
            <BlenderSidebar />
          </div>

          {/* main products */}
          <div>
            <BlenderProducts />
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
