import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Mini Electric Tea Kettle", link: "#" },
    { name: "Small Pot", link: "#" },
    { name: "Whistling Kettle", link: "#" },
    { name: "Whistle Kettle", link: "#" },
    { name: "Flower Pots", link: "#" },
    { name: "Vase", link: "#" },
    { name: "Flower Vase", link: "#" },
    { name: "Small Flower Pots", link: "#" },
    { name: "Flowers In Vases", link: "#" },
    { name: "Small Electric Kettle", link: "#" },
    { name: "Philips Electric Kettle", link: "#" },
    { name: "Boiler", link: "#" },
    { name: "Century Electric Kettle", link: "#" },
    { name: "Electric Water Boiler", link: "#" },
  ];

  const rol2 = [
    { name: "Vase Of Flowers", link: "#" },
    { name: "Electric Pot", link: "#" },
    { name: "Electric Cooking Pot", link: "#" },
    { name: "Foldable Electric Kettle", link: "#" },
    { name: "Boiling Kettle", link: "#" },
    { name: "Electric Jugs", link: "#" },
    { name: "Small Water Bottles", link: "#" },
    { name: "Mini Heater", link: "#" },
    { name: "Electric Heater", link: "#" },
    { name: "Electric Kettle Small Size", link: "#" },
    { name: "Water Boiler And Warmer", link: "#" },
    { name: "Electric Kettle With Temperature Control", link: "#" },
    { name: "Tea Kettle With Infuser", link: "#" },
    { name: "Mini Electric Kettle", link: "#" },
  ];

  const rol3 = [
    { name: "Water Cups", link: "#" },
    { name: "Tea Pots", link: "#" },
    { name: "Tea Pot", link: "#" },
    { name: "Small Teapot", link: "#" },
    { name: "Flower Tea", link: "#" },
    { name: "Boiler", link: "#" },
    { name: "Teapot", link: "#" },
    { name: "Teapot Kettle", link: "#" },
    { name: "Electric Boiler", link: "#" },
    { name: "Swan Kettle And Toaster", link: "#" },
    { name: "Water Boiler", link: "#" },
    { name: "Tea Pots", link: "#" },
    { name: "Tea Pot", link: "#" },
    { name: "Foldable Electric Kettle", link: "#" },
  ];

  const rol4 = [
    { name: "Small Electric Stove", link: "#" },
    { name: "Electric Stove", link: "#" },
    { name: "Small Gas Stove", link: "#" },
    { name: "Gas Stove", link: "#" },
    { name: "Electric Teapot", link: "#" },
    { name: "Cooker", link: "#" },
    { name: "Mini Cooker", link: "#" },
    { name: "Glass Kettle", link: "#" },
    { name: "Electric Boiler", link: "#" },
    { name: "Egg Boiler", link: "#" },
    { name: "Polished Stainless Steel Electric Kettle", link: "#" },
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
