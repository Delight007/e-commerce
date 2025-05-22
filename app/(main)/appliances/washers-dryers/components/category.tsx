import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "All-in-One Combination Washers & Dryers", link: "#" },
    { name: "Dryers", link: "#" },
    { name: "Specialty Laundry", link: "#" },
    { name: "Stacked Washer & Dryer Units", link: "#" },
    { name: "Washing Machines", link: "#" },
  ];

  return (
    <div>
      <div className=" py-2 px-4">
        <h2 className="uppercase font-semibold text-[13px] ">Category</h2>
      </div>
      <div className="hover:bg-black/10  px-4 py-[6px] text-sm">
        <Link href="#">Large appliances</Link>
      </div>
      <div className="hover:bg-black/10 font-medium  px-4 py-[6px] text-sm">
        <Link href="#">Washing Machine & Dryers</Link>
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
