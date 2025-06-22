import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Electrical Tools", link: "#" },
    { name: "Electrical Cooker", link: "#" },
    { name: "Mini Cooker", link: "#" },
    { name: "Electric Cooker", link: "#" },
    { name: "Cooker", link: "#" },
    { name: "Electric Gas", link: "#" },
    { name: "Gas Cooker", link: "#" },
    { name: "Electric And Gas Cooker", link: "#" },
    { name: "Electric Gas Cooker", link: "#" },
  ];

  const rol2 = [
    { name: "Gas And Electric Cooker", link: "#" },
    { name: "Mini Gas Cooker", link: "#" },
    { name: "Led Lights For Home", link: "#" },
    { name: "Mini Led Lights", link: "#" },
    { name: "Led Kitchen Lighting", link: "#" },
    { name: "Small Led Bulb", link: "#" },
    { name: "Small Led Light Bulbs", link: "#" },
    { name: "Stove", link: "#" },
    { name: "Electric Stove", link: "#" },
  ];

  const rol3 = [
    { name: "Small Electric Stove", link: "#" },
    { name: "Cooking Stove", link: "#" },
    { name: "Electric Burner", link: "#" },
    { name: "Gas Burner", link: "#" },
    { name: "Gas Stove", link: "#" },
    { name: "Incense Burner", link: "#" },
    { name: "Gas Stove Burner", link: "#" },
    { name: "Small Gas Stove", link: "#" },
    { name: "Electric Incense Burner", link: "#" },
  ];

  const rol4 = [
    { name: "Kitchen Cleaning Kits", link: "#" },
    { name: "Gardening Kit", link: "#" },
    { name: "Kitchen Handles", link: "#" },
    { name: "House Doors", link: "#" },
    { name: "Kitchen Brush", link: "#" },
    { name: "Electric Brush", link: "#" },
    { name: "Dining Plates", link: "#" },
    { name: "Cooking Plate", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full justify-center items-center p-3 grid grid-cols-4">
        <div className=" ">
          {rol1.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className="">
          {rol2.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className=" ">
          {rol3.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className=" ">
          {rol4.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
