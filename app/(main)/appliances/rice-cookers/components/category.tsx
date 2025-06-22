import Link from "next/link";
import React from "react";

export default function Category() {
  const categories = [
    { name: "Beer Keg Refrigerators", link: "#" },
    { name: "Beverage Refrigerators", link: "#" },
    { name: "Blenders", link: "#" },
    { name: "Bread Machines", link: "#" },
    { name: "Coffee, Tea & Espresso Appliances", link: "#" },
    { name: "Compact Refrigerators", link: "#" },
    { name: "Contact Grills", link: "#" },
    { name: "Conventional Burners", link: "#" },
    { name: "Deep Fryers", link: "#" },
    { name: "Electric Cookware", link: "#" },
    { name: "Electric Drink Mixers", link: "#" },
    { name: "Electric Griddles", link: "#" },
    { name: "Electric Pressure Cookers", link: "#" },
    { name: "Electric Skillets", link: "#" },
    { name: "Electric Woks", link: "#" },
    { name: "Food Processors", link: "#" },
    { name: "Hot Pots", link: "#" },
    { name: "Ice Cream Machines", link: "#" },
    { name: "Juicers", link: "#" },
    { name: "Microwave Ovens", link: "#" },
    { name: "Mixers", link: "#" },
    { name: "Ovens & Toasters", link: "#" },
    { name: "Rice Cookers", link: "#" },
    { name: "Slow Cookers", link: "#" },
    { name: "Small Appliance Sets", link: "#" },
    { name: "Soda Makers", link: "#" },
    { name: "Specialty Appliances", link: "#" },
    { name: "Steamers", link: "#" },
    { name: "Waffle Irons", link: "#" },
    { name: "Wine Cellars", link: "#" },
    { name: "Air Fryers", link: "#" },
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
