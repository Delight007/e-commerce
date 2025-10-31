import React from "react";
import FridgesFreezerSidebar from "./sidebar";
import FridgesProducts from "./mainProducts";
import FFCategory from "./category/ffcategory";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    // <div>
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="my-6">
          <FFCategory />
        </div>
        <div className="w-full flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <FridgesFreezerSidebar />
          </div>

          {/* main products */}
          <div>
            <FridgesProducts />
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
