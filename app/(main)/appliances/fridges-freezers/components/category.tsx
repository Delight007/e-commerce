import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Air Conditioners & Accessories", link: "#" },
    { name: "Cooktops", link: "#" },
    { name: "Dishwashers", link: "#" },
    { name: "Freezers", link: "#" },
    { name: "Furnace Filters", link: "#" },
    { name: "Large Appliance Accessories", link: "#" },
    { name: "Range Hoods", link: "#" },
    { name: "Ranges", link: "#" },
    { name: "Fridges", link: "#" },
    { name: "Trash Compactors", link: "#" },
    { name: "Wall Ovens", link: "#" },
    { name: "Washing Machines & Dryers", link: "#" },
  ];
  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-4 py-[6px] text-sm">
        <Link href="#">Large appliances</Link>
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
