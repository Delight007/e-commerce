import Image from "next/image";
import React from "react";
import ImageSwipper from "./components/imageSwiper";
import Category from "./components/nexusCategory";
import NexusCategory from "./category/category";
import NexusSidebar from "./sidebar";
import NexusProducts from "./nexusProducts";

export default function nexus() {
  return (
    <div className="w-full">
      <div className="mb-5">
        <ImageSwipper />
      </div>
      <div className="mb-5">
        <NexusCategory />
      </div>
      <div className="flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <NexusSidebar />
        </div>
        <div>
          <NexusProducts />
        </div>
      </div>
    </div>
  );
}
