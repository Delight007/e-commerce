import React from "react";
import Category1 from "./categoryList/category1";
import PhoneBrand from "./categoryList/phoneBrand";

export default function PhoneTabletsCategory() {
  return (
    <div>
      <div className="my-5">
        <Category1 />
      </div>
      <div className="my-5">
        <PhoneBrand />
      </div>
    </div>
  );
}
