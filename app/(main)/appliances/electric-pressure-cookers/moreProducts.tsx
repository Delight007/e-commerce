import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Electric Incense Burner", link: "#" },
    { name: "Gas And Electric Cooker", link: "#" },
    { name: "Gas Cooker", link: "#" },
    { name: "Gas Burner", link: "#" },
    { name: "Gas Stove", link: "#" },
    { name: "Small Gas Stove", link: "#" },
    { name: "Electric Burner", link: "#" },
    { name: "Pressure Cooker Pot", link: "#" },
    { name: "Pressure Cooking Pot", link: "#" },
  ];

  const rol2 = [
    { name: "Electric Pot", link: "#" },
    { name: "Pressure Pots", link: "#" },
    { name: "Small Pot", link: "#" },
    { name: "Electric Cooking Pot", link: "#" },
    { name: "Pressure Pot", link: "#" },
    { name: "Small Flower Pots", link: "#" },
    { name: "Multi Cooker", link: "#" },
    { name: "Gas Cooker 2 Burner", link: "#" },
    { name: "2 Burner Gas Cooker", link: "#" },
  ];

  const rol3 = [
    { name: "Steam Press", link: "#" },
    { name: "Steam Cooker", link: "#" },
    { name: "6 Burners Gas Cookers", link: "#" },
    { name: "6 Burner Gas Cooker", link: "#" },
    { name: "Gas Cooker 6 Burner", link: "#" },
    { name: "5 Burner Gas Cookers", link: "#" },
    { name: "5 Burner Gas Cooker", link: "#" },
    { name: "Stove Steamer", link: "#" },
    { name: "Mini Steamer", link: "#" },
  ];

  const rol4 = [
    { name: "Incense Sticks", link: "#" },
    { name: "Steamer Cooker", link: "#" },
    { name: "Gas Cooker 5 Burner", link: "#" },
    { name: "Kitchen Steamer", link: "#" },
    { name: "Steamer", link: "#" },
    { name: "Silver Crest Pressure Cooker", link: "#" },
    { name: "Electric Frying Pan", link: "#" },
    { name: "Portable Stove", link: "#" },
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
