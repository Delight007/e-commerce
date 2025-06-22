import React from "react";
import ColorList from "./colorList";

export default function Color() {
  return (
    <div>
      <h2 className="font-medium">Color</h2>
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden h-[195px]  mt-1">
        <ColorList />
      </div>
    </div>
  );
}
