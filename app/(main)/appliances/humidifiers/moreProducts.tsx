import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Room Freshener", link: "#" },
    { name: "Cool Room Accessories", link: "#" },
    { name: "Room Heater", link: "#" },
    { name: "Room Accessories", link: "#" },
    { name: "Single Room Ac", link: "#" },
    { name: "diffuser", link: "#" },
    { name: "Air Diffusers", link: "#" },
    { name: "Aroma Diffuser", link: "#" },
    { name: "Usb Air Conditioner", link: "#" },
  ];

  const rol2 = [
    { name: "Room Diffuser", link: "#" },
    { name: "Oil Humidifier", link: "#" },
    { name: "Oil Cloth", link: "#" },
    { name: "Humidifer Parts", link: "#" },
    { name: "Essential Oil Humidifier", link: "#" },
    { name: "essential oil", link: "#" },
    { name: "Essential Oils", link: "#" },
    { name: "Pet Accessories", link: "#" },
    { name: "mini", link: "#" },
  ];

  const rol3 = [
    { name: "Mini Heater", link: "#" },
    { name: "Mini Air Conditioner", link: "#" },
    { name: "Mini AC", link: "#" },
    { name: "Small Humidifier", link: "#" },
    { name: "Oil Diffuser", link: "#" },
    { name: "Essential Oil Diffuser Humidifier", link: "#" },
    { name: "Humidifier With Essential Oil Diffuser", link: "#" },
    { name: "Essential Oil Diffuser", link: "#" },
    { name: "Mini Ac For Room", link: "#" },
  ];

  const rol4 = [
    { name: "Cool Mist Humidifier", link: "#" },
    { name: "Portable Heater", link: "#" },
    { name: "Portable Kitchen", link: "#" },
    { name: "Portable Air Purifier", link: "#" },
    { name: "Portable Humidifier", link: "#" },
    { name: "Heat Light", link: "#" },
    { name: "Office Lighting", link: "#" },
    { name: "Cool Lamps", link: "#" },
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
