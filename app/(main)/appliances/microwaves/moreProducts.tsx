import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Oven For Baking", link: "#" },
    { name: "Baking Ovens", link: "#" },
    { name: "Small Oven For Baking", link: "#" },
    { name: "Microwave Oven With Grill", link: "#" },
    { name: "Microwave Oven Grill", link: "#" },
    { name: "Microwave Grill", link: "#" },
    { name: "Mini Grill", link: "#" },
    { name: "Grilling Oven", link: "#" },
    { name: "Microwave With Grill", link: "#" },
  ];

  const rol2 = [
    { name: "Grill Kit", link: "#" },
    { name: "Grill Microwave Oven", link: "#" },
    { name: "Oven And Grill", link: "#" },
    { name: "Oven Grill", link: "#" },
    { name: "Oven Mitt", link: "#" },
    { name: "Mini Heater", link: "#" },
    { name: "Bread Oven", link: "#" },
    { name: "Microwave Cover", link: "#" },
    { name: "Countertop Oven", link: "#" },
  ];

  const rol3 = [
    { name: "Small Countertop Microwave", link: "#" },
    { name: "Dig Kit", link: "#" },
    { name: "Pet Food", link: "#" },
    { name: "Microwave Food", link: "#" },
    { name: "20 Litres Microwave", link: "#" },
    { name: "Hisense Microwave", link: "#" },
    { name: "Electrical Oven", link: "#" },
    { name: "Mini Electric Oven", link: "#" },
    { name: "Air Oven", link: "#" },
  ];

  const rol4 = [
    { name: "Electric Oven", link: "#" },
    { name: "Microwave Food Cover", link: "#" },
    { name: "Oven Pan", link: "#" },
    { name: "Small Pot", link: "#" },
    { name: "Oven Pans", link: "#" },
    { name: "Inverter Home", link: "#" },
    { name: "Inverter Microwave", link: "#" },
    { name: "Home Inverter", link: "#" },
  ];

  return (
    <div className="bg-white">
      <div className="w-full justify-center items-center p-2 grid grid-cols-4">
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
