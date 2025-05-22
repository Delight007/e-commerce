"use client";
import MainProducts from "./mProduct/mProducts";
import Siderbar from "./sidebar/sidebar";

export default function Products() {
  return (
    <div className=" flex py-3 gap-3">
      {/* sidebar in Appliances page */}
      <div>
        <Siderbar />
      </div>

      {/* Main Products */}
      <div className="">
        <MainProducts />
      </div>
    </div>
  );
}
