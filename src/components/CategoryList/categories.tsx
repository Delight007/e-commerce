"use client";

import Link from "next/link";
import MouseHoverPopover from "../ui/flyOutMenu";

export default function categories() {
  return (
    <div className="flex flex-col rounded border bg-white w-[210px] h-full">
      <span className="flex w-full h-[40px] text-[12px] items-center ml-2 gap-2  hover:text-red-500">
        <MouseHoverPopover />
      </span>
      <span className="flex w-full h-[40px] text-[12px] items-center ml-2 gap-2  hover:text-red-500">
        <MouseHoverPopover />
      </span>
      <span className="flex w-full h-[40px] text-[12px] items-center ml-2 gap-2  hover:text-red-500">
        <MouseHoverPopover />
      </span>
    </div>
  );
}
