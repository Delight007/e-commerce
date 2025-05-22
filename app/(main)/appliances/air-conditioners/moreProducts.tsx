import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "1Hp Split Air Conditioner", link: "#" },
    { name: "Lg Split Air Conditioner", link: "#" },
    { name: "Lg Split Ac", link: "#" },
    { name: "Energy Saving Air Conditioner", link: "#" },
    { name: "Air Conditioner Installation Kits", link: "#" },
    { name: "Hisense Split Ac", link: "#" },
    { name: "Lg Inverter Ac", link: "#" },
    { name: "Lg Inverter Air Conditioner", link: "#" },
    { name: "Lg Inverter", link: "#" },
  ];

  const rol2 = [
    { name: "Gencool", link: "#" },
    { name: "Gencool Air Conditioner", link: "#" },
    { name: "Mini Air Conditioner", link: "#" },
    { name: "Lg Gencool Inverter Ac", link: "#" },
    { name: "Lg Gencool", link: "#" },
    { name: "Air Conditioner Standing", link: "#" },
    { name: "Standing Air Conditioner", link: "#" },
    { name: "Standing Air Conditioning", link: "#" },
    { name: "2hp Inverter Ac", link: "#" },
  ];

  const rol3 = [
    { name: "Split Unit", link: "#" },
    { name: "Split Unit Ac", link: "#" },
    { name: "Split Unit Air Conditioner", link: "#" },
    { name: "Foldable Fans", link: "#" },
    { name: "Panasonic Inverter Air Conditioner", link: "#" },
    { name: "Panasonic Inverter", link: "#" },
    { name: "Cooling Fan", link: "#" },
    { name: "Ac Cooling Fans", link: "#" },
    { name: "Floor Standing Air Conditioner", link: "#" },
  ];

  const rol4 = [
    { name: "Aircooler", link: "#" },
    { name: "Panasonic Ac 2hp", link: "#" },
    { name: "Lg Dual Inverter Ac", link: "#" },
    { name: "Lg Dual Inverter Air Conditioner", link: "#" },
    { name: "Lg Dual Inverter", link: "#" },
    { name: "1hp Inverter Air Conditioners", link: "#" },
    { name: "Hisense 1.5Hp", link: "#" },
    { name: "Inverter Ac 1hp", link: "#" },
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
