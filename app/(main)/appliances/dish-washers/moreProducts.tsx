import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Dish Drainer Rack", link: "#" },
    { name: "Food Dryer", link: "#" },
    { name: "Food Dryer Machine", link: "#" },
    { name: "Dryer Machine", link: "#" },
  ];

  const rol2 = [
    { name: "Service Shoes", link: "#" },
    { name: "Dish Washer Machine", link: "#" },
    { name: "Food Brush", link: "#" },
    { name: "Washing Machine Small", link: "#" },
  ];

  const rol3 = [
    { name: "Small Washing Machine", link: "#" },
    { name: "Mini Washing Machine", link: "#" },
    { name: "Hair Food", link: "#" },
    { name: "Mini Washer", link: "#" },
  ];

  const rol4 = [
    { name: "Countertop Dishwasher", link: "#" },
    { name: "Noodles Bowl", link: "#" },
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
