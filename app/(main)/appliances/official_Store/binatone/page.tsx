import React from "react";
import ImageSwiper from "./components/ImageSwiper";
import Binatone from "./category/ProductCategory/binatone";
import BinatoneSidebar from "./sidebar";
import BinatoneProducts from "./binatoneProducts";
import BinatoneDetails from "./components/binatoneDetails";

export default function binatone() {
  return (
    <div className="w-full">
      <div className="mb-5">
        <ImageSwiper />
      </div>
      <div className="mb-5">
        <Binatone />
      </div>
      <div className="flex py-3 gap-3">
        {/* Sidebar */}
        <div>
          <BinatoneSidebar />
        </div>

        {/* main Products */}
        <div>
          <BinatoneProducts />
        </div>
      </div>
      {/* Binatone Products General Details */}
      <div className="mb-5">
        <BinatoneDetails />
      </div>
    </div>
  );
}
