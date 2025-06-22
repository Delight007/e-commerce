import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-6 py-[6px] text-sm">
        <Link href="#">Air Conditioners & Accessories</Link>
      </div>
      <div className="hover:bg-black/10 font-medium px-6 py-[6px] text-sm">
        <Link href="#">Air Conditioners</Link>
      </div>
      <div className="hover:bg-black/10 px-8 py-[6px] text-sm">
        <Link href="#"> Evaporative Coolers</Link>
      </div>
      <div className="hover:bg-black/10 px-8 py-[6px] text-sm">
        <Link href="#">Portable</Link>
      </div>
      <div className="hover:bg-black/10 px-8 py-[6px] text-sm">
        <Link href="#">Split-System</Link>
      </div>
      <div className="hover:bg-black/10 px-8 py-[6px] text-sm">
        <Link href="#">Wall</Link>
      </div>
      <div className="hover:bg-black/10 px-8 py-[6px] text-sm">
        <Link href="#">Window</Link>
      </div>
    </div>
  );
}
