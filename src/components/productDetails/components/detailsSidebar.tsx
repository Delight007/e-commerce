import React from "react";
import Sidebar1 from "./sidebar/sidebar1";
import Sidebar2 from "./sidebar/sidebar2";

export default function DetailsSidebar() {
  return (
    <div className="w-[282px] h-[807px] gap-4 flex flex-col">
      <Sidebar1 />
      <Sidebar2 />
    </div>
  );
}
