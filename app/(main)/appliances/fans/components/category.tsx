import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Blower Fans", link: "#" },
    { name: "Box Fans", link: "#" },
    { name: "Drum Fans", link: "#" },
    { name: "Floor Fans", link: "#" },
    { name: "Household Fan Accessories", link: "#" },
    { name: "Household Fan Replacement Parts", link: "#" },
    { name: "Pedestal Fans", link: "#" },
    { name: "Rechargeable Fans", link: "#" },
    { name: "Specialty Fans", link: "#" },
    { name: "Table Fans", link: "#" },
    { name: "Tower Fans", link: "#" },
    { name: "Wall-Mounted Fans", link: "#" },
    { name: "Window Fans", link: "#" },
    { name: "Standing Fans", link: "#" },
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
        <Link href="#">Household Fans</Link>
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
