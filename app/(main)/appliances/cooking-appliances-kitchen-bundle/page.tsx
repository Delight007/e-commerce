import React from "react";

import BundleSidebar from "./sidebar";
import BundleProducts from "../electric-cookware/mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <BundleSidebar />
        </div>

        {/* main products */}
        <div>
          <BundleProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
