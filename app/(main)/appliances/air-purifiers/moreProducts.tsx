import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Kitchen Cleaning Kits", link: "#" },
    { name: "Air Conditioner Cleaning Kit", link: "#" },
    { name: "Kitchen Brush", link: "#" },
    { name: "Kitchen Cleaner", link: "#" },
    { name: "Vacuum Cleaner", link: "#" },
    { name: "Air Vacuum Cleaner", link: "#" },
    { name: "Vacuum Cleaner Parts", link: "#" },
    { name: "Vacuum Hoover", link: "#" },
    { name: "Hoover Vacuum Cleaner", link: "#" },
  ];

  const rol2 = [
    { name: "Ai Robot", link: "#" },
    { name: "Cool Robot", link: "#" },
    { name: "Ro Filter", link: "#" },
    { name: "Hepa Filter", link: "#" },
    { name: "Robotic Vacuum", link: "#" },
    { name: "Robot Vacuum", link: "#" },
    { name: "Mops", link: "#" },
    { name: "The Mop", link: "#" },
    { name: "Hepa Filter Vacuum", link: "#" },
  ];

  const rol3 = [
    { name: "Vacuum Cleaner Filter", link: "#" },
    { name: "Robot Cleaner", link: "#" },
    { name: "Robot Vacuum Cleaner", link: "#" },
    { name: "Vacuum Mop", link: "#" },
    { name: "Spa Kit", link: "#" },
    { name: "Robot Mop", link: "#" },
    { name: "Robot Vacuum And Mop", link: "#" },
    { name: "Robotic Hand", link: "#" },
    { name: "Hand Vacuum Cleaner", link: "#" },
  ];

  const rol4 = [
    { name: "Fabric Conditioner", link: "#" },
    { name: "Cloth Bag", link: "#" },
    { name: "Dust Clothes", link: "#" },
    { name: "Roll On", link: "#" },
    { name: "Thermal Roll", link: "#" },
    { name: "Mini AC", link: "#" },
    { name: "Mini Heater", link: "#" },
    { name: "Mini Air Conditioner", link: "#" },
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
