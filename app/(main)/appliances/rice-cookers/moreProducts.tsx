import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Gas Stove", link: "#" },
    { name: "Stove", link: "#" },
    { name: "Electric Cooker", link: "#" },
    { name: "Electrical Cooker", link: "#" },
    { name: "Electric Rice Cooker", link: "#" },
    { name: "Electrical Home Appliances", link: "#" },
    { name: "Small Pot", link: "#" },
    { name: "Kitchen Pots", link: "#" },
    { name: "Kitchen Pot", link: "#" },
    { name: "Rice Container", link: "#" },
  ];

  const rol2 = [
    { name: "Vase", link: "#" },
    { name: "Vase Of Flowers", link: "#" },
    { name: "Flower Vase", link: "#" },
    { name: "Flowers In Vases", link: "#" },
    { name: "Flower Pots", link: "#" },
    { name: "Small Flower Pots", link: "#" },
    { name: "Electric Gas", link: "#" },
    { name: "Small Electric Stove", link: "#" },
    { name: "Electric Stove", link: "#" },
    { name: "Rice Cookers & Rice boilers", link: "#" },
    { name: "Kenwood Rice Cooker", link: "#" },
  ];

  const rol3 = [
    { name: "Electric And Gas Cooker", link: "#" },
    { name: "Gas And Electric Cooker", link: "#" },
    { name: "Electric Gas Cooker", link: "#" },
    { name: "Electric Incense Burner", link: "#" },
    { name: "Electric Burner", link: "#" },
    { name: "electric pot", link: "#" },
    { name: "Electric Cooking Pot", link: "#" },
    { name: "Steam Cooker", link: "#" },
    { name: "Kitchen Steamer", link: "#" },
    { name: "Steamer Pot", link: "#" },
  ];

  const rol4 = [
    { name: "Rice Steamer", link: "#" },
    { name: "Mini Steamer", link: "#" },
    { name: "Steamery", link: "#" },
    { name: "Steamer Cooker", link: "#" },
    { name: "Steamer", link: "#" },
    { name: "Multi Cooker", link: "#" },
    { name: "Electric Hot Pot", link: "#" },
    { name: "Stove Steamer", link: "#" },
    { name: "Microwave Vegetable Steamer", link: "#" },
    { name: "Mini Rice Cooker", link: "#" },
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
