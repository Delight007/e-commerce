"use client";
import MainProducts from "./mProduct/mProducts";
import SideBar from "./sidebar/sidebar";

export default function Products() {
  return (
    <div className=" flex py-3 gap-3">
      {/* sidebar in Appliances page */}
      <div>
        <SideBar />
      </div>

      {/* Main Products */}
      <div>
        <MainProducts />
      </div>
    </div>
  );
}
