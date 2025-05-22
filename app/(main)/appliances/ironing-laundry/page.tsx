import React from "react";
import DishWasherSidebar from "./sidebar";
import DishWasherProducts from "./mainProducts";
import IronSidebar from "./sidebar";
import IronProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <IronSidebar />
        </div>

        {/* main products */}
        <div>
          <IronProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />{" "}
      </div>
    </div>
  );
}
