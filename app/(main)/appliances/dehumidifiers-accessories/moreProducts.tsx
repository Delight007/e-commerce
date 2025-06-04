import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Cool Humidifier", link: "#" },
    { name: "Car Air Freshener", link: "#" },
    { name: "Humidifier", link: "#" },
    { name: "humidifiers", link: "#" },
    { name: "Usb Air Conditioner", link: "#" },
    { name: "Air Beds", link: "#" },
    { name: "Air Bed", link: "#" },
    { name: "Bedroom Air Purifier", link: "#" },
    { name: "Dehumidifier For Bedroom", link: "#" },
  ];

  const rol2 = [
    { name: "Kitchen Heat Absorber", link: "#" },
    { name: "Cloth Dryer", link: "#" },
    { name: "Air Dryer", link: "#" },
    { name: "Heated Clothes Dryer", link: "#" },
    { name: "Clothes Dryer", link: "#" },
    { name: "Air Blower", link: "#" },
    { name: "Moisture Absorber", link: "#" },
    { name: "Water Purifiers", link: "#" },
    { name: "Water Air Purifiers", link: "#" },
  ];

  const rol3 = [
    { name: "Pur Water", link: "#" },
    { name: "Water Purifier & Filter", link: "#" },
    { name: "Water Heater", link: "#" },
    { name: "Water Purifier", link: "#" },
    { name: "Water Purification", link: "#" },
    { name: "Thermostat", link: "#" },
    { name: "Heat Light", link: "#" },
    { name: "Heat Lamp", link: "#" },
    { name: "Heat Lamp Bulb", link: "#" },
  ];

  const rol4 = [
    { name: "Heat Lamps", link: "#" },
    { name: "Mini Dryer", link: "#" },
    { name: "Smart Thermostat", link: "#" },
    { name: "Small Bed", link: "#" },
    { name: "Bathroom Heaters", link: "#" },
    { name: "Kitchen Thermometer", link: "#" },
    { name: "Bathroom Dehumidifier", link: "#" },
    { name: "Air Diffusers", link: "#" },
  ];

  return (
    <div className="w-full  bg-white px-4">
      <div className="w-full justify-center items-center py-3 grid grid-cols-4">
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
