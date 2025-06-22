import React from "react";
import Discount1 from "./discount1/discount1";
import Discount2 from "./discount2/discount2";
import Discount3 from "./discount3/Discount3";
import Discount4 from "./discount4/discount4";
import Discount5 from "./discount5/discount5";

export default function Discount() {
  return (
    <div>
      <div className=" py-2">
        <h2 className="uppercase font-semibold text-[13px] ">
          Discount percentage
        </h2>
      </div>
      <div className="ml-2">
        <Discount1 />
        <Discount2 />
        <Discount3 />
        <Discount4 />
        <Discount5 />
      </div>
    </div>
  );
}
