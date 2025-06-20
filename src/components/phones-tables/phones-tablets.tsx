import React from "react";
import PhoneTabletsCategory from "./phoneCategory";
import PhoneProducts from "./phoneProducts";

export default function PhonesTablets() {
  return (
    <div>
      <div className=" w-full h-[50px] rounded-md border bg-white mt-3 shadow-lg flex justify-center items-center font-[500] text-xl ">
        <h2> Phones & Tablets</h2>
      </div>

      {/* category */}
      <div>
        <PhoneTabletsCategory />
      </div>

      {/* products */}
      <div>
        <PhoneProducts />
      </div>
    </div>
  );
}
