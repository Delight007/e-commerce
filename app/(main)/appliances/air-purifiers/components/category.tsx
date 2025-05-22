import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Air Ionizers", link: "#" },
    { name: "Charcoal Air Purifiers", link: "#" },
    { name: "Electrostatic Air Purifiers", link: "#" },
    { name: "HEPA Air Purifiers", link: "#" },
    { name: "Parts & Accessories", link: "#" },
    { name: "Travel-Size Air Purifiers", link: "#" },
    { name: "ULPA Air Purifiers", link: "#" },
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
        <Link href="#">Air Purifiers</Link>
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
