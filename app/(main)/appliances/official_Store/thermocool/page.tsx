import React from "react";
import ThermocoolCategory from "./category/thermocoolCategory";
import ImageSwiper from "./components/imageSwiper";
import ThermocoolDeals from "./category/productCategory/thermocool";
import ThermocoolSidebar from "./sideBar";
import ThermocoolProducts from "./thermocoolProducts";
import ThermocoolDetails from "./components/ThermocoolDetails";

export default function thermocool() {
  return (
    <div className="w-full">
      <div className="mb-5">
        <ImageSwiper />
      </div>
      <div className="mb-5">
        <ThermocoolDeals />
      </div>
      <div className="mb-5">
        <ThermocoolCategory />
      </div>
      <div className="flex py-3 gap-3">
        {/* Sidebar */}
        <div>
          <ThermocoolSidebar />
        </div>
        {/* mainproducts */}
        <div>
          <ThermocoolProducts />
        </div>
      </div>
      <div className="mb-5">
        <ThermocoolDetails />
      </div>
    </div>
  );
}
