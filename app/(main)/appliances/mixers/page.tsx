import React from "react";
import MixerSidebar from "./sidebar";
import MixerProducts from "./mainProducts";
import MoreProducts from "./moreProducts";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <MixerSidebar />
        </div>

        {/* main products */}
        <div>
          <MixerProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
