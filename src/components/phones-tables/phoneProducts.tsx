import React from "react";
import MainPhonesProducts from "./allProducts/products";
import PhonesSidebar from "./allProducts/sidebar/phonesSidebar";

export default function PhoneProducts() {
  return (
    <div className="flex py-3 gap-3">
      {/* sidebar */}
      <div>
        <PhonesSidebar />
      </div>

      {/* Products */}
      <div>
        <MainPhonesProducts />
      </div>
    </div>
  );
}
