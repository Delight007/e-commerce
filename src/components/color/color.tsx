import React from "react";
import WhiteColor from "./white/white";
import BlackColor from "./black/black";
import SilverColor from "./silver/silver";

export default function Color() {
  return (
    <div>
      <div className=" py-2">
        <h2 className="uppercase font-semibold text-[13px] ">Color</h2>
      </div>
      <BlackColor />
      <SilverColor />
      <WhiteColor />
    </div>
  );
}
