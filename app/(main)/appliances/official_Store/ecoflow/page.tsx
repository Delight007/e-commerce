import Image from "next/image";
import React from "react";
import ImageSwipper from "./components/Swiper/imageSwipper";
import EcoflowSidebar from "./sidebar";
import EcoflowProducts from "./ecoflowProducts";
export default function ecoflow() {
  return (
    <div className="w-full">
      <div className="mb-5">
        <ImageSwipper />
      </div>
      <div className="flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <EcoflowSidebar />
        </div>
        <div>
          <EcoflowProducts />
        </div>
      </div>
    </div>
  );
}
