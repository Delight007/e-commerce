import React from "react";
import CoffeeMakerSidebar from "./sidebar";
import CoffeeMakerProducts from "./mainProducts";
import MoreCoffeeProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <CoffeeMakerSidebar />
        </div>

        {/* main products */}
        <div>
          <CoffeeMakerProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreCoffeeProducts />
      </div>
    </div>
  );
}
