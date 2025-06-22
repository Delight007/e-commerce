import React from "react";

export default function MoreCoffeeProducts() {
  const rol1 = [
    { name: "Tea Maker Machine", link: "#" },
    { name: "Kitchen Machine", link: "#" },
    { name: "Stainless Pots", link: "#" },
    { name: "Filter Coffee Maker", link: "#" },
    { name: "Tea Cup", link: "#" },
    { name: "Deep Coffee Maker", link: "#" },
    { name: "Italian Espresso Maker", link: "#" },
    { name: "Bar kit", link: "#" },
    { name: "Kitchen Cap", link: "#" },
  ];
  const rol2 = [
    { name: "Machine Cafe", link: "#" },
    { name: "Espresso Machine", link: "#" },
    { name: "Stainless Steel Pot", link: "#" },
    { name: "Coffee Mugs", link: "#" },
    { name: "K Cup Coffee", link: "#" },
    { name: "Coffe Press", link: "#" },
    { name: "Italian Coffee Maker", link: "#" },
    { name: "Kitchen Handles", link: "#" },
    { name: "Latte Coffee Maker", link: "#" },
  ];

  const rol3 = [
    { name: "Tea Machine", link: "#" },
    { name: "Coffee Maker Machine", link: "#" },
    { name: "Stainless Steel Pots", link: "#" },
    { name: "Tea Mugs", link: "#" },
    { name: "Empresso K Cops", link: "#" },
    { name: "Stove", link: "#" },
    { name: "Pour Over Coffee Maker", link: "#" },
    { name: "Milk Tea", link: "#" },
    { name: "V Bar", link: "#" },
  ];

  const rol4 = [
    { name: "Machine A Cofe", link: "#" },
    { name: "Coffee Machine", link: "#" },
    { name: "Tea Kettle", link: "#" },
    { name: "Coffee Cup", link: "#" },
    { name: "Coffee Cups", link: "#" },
    { name: "Portable Coffee Maker", link: "#" },
    { name: "Coffee Bars", link: "#" },
    { name: "Stainless Kettle", link: "#" },
  ];
  return (
    <div className="w-full bg-white justify-center items-center p-2 grid grid-cols-4">
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
  );
}
