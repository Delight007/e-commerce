import React from "react";
import WashingCategory from "./category";
import WashingCategory2 from "./category2";

export default function CategoryWrapper() {
  return (
    <div className="bg-white">
      <div>
        <WashingCategory />
        <WashingCategory2 />
      </div>
    </div>
  );
}
