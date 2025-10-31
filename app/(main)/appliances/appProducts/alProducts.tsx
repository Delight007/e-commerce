"use client";
import MainProducts from "./mProduct/mProducts";
import SideBar from "./sidebar/sidebar";

export default function AllProducts() {
  return (
    <div className="flex flex-col-reverse lg:flex-row py-3 gap-3">
      {/* sidebar in Appliances page */}
      <div>
        <SideBar />
      </div>

      {/* Main Products */}
      <div className="mt-4 sm:mt-0">
        <MainProducts />
      </div>
    </div>
  );
}
