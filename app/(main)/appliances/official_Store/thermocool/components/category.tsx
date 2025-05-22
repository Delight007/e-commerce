import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-6 py-[6px] text-sm">
        <Link href="#">Electronics</Link>
      </div>
      <div className="hover:bg-black/10 px-6 py-[6px] text-sm">
        <Link href="#">Garden & Outdoors</Link>
      </div>
      <div className="hover:bg-black/10 px-6 py-[6px] text-sm">
        <Link href="#">Home & Office</Link>
      </div>
    </div>
  );
}
