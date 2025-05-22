import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Dish Carts", link: "#" },
    { name: "Dish Racks", link: "#" },
    { name: "Dishwashers", link: "#" },
    { name: "Garbage Disposals", link: "#" },
    { name: "Glass Washers", link: "#" },
    { name: "Grease Traps", link: "#" },
    { name: "Pot Washers", link: "#" },
    { name: "Pressure Washers", link: "#" },
  ];

  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-4 py-[6px] text-sm">
        <Link href="#">Dishwashing Equipment</Link>
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
