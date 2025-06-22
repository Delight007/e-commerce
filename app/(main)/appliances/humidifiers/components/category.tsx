import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Humidifier Parts & Accessories", link: "#" },
    { name: "Single Room Humidifiers", link: "#" },
    { name: "Whole House Humidifiers", link: "#" },
  ];

  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-4 py-[6px] text-sm">
        <Link href="#">Heaters, Air Cooling & Purification</Link>
      </div>
      <div className="hover:bg-black/10  px-4 py-[6px] text-sm">
        <Link href="#">Humidifiers & Accessories</Link>
      </div>

      <div>
        {categories.map((category) => (
          <div
            key={category.name}
            className="hover:bg-black/10  px-6 py-[6px] text-sm"
          >
            <Link href={category.link}>{category.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
