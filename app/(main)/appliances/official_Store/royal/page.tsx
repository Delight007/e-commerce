import React from "react";
import RoyalSidebar from "./sidebar";
import Royal from "./components/category/ProductCategory/royal";
import RoyalProducts from "./royalProducts";

export default function royal() {
  return (
    <div className="w-full">
      {/* category */}
      <div className="mb-5">
        <Royal />
      </div>

      <div className="mb-5 flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <RoyalSidebar />
        </div>

        {/* main products */}
        <div>
          <RoyalProducts />
        </div>
      </div>
    </div>
  );
}
