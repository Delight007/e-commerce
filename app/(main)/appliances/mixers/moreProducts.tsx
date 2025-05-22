import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Ai Robot", link: "#" },
    { name: "kitchen appliance", link: "#" },
    { name: "Egg Whisk", link: "#" },
    { name: "Egg Beaters", link: "#" },
    { name: "Egg Mixer", link: "#" },
    { name: "Electrical Tools", link: "#" },
    { name: "Hand Whisk", link: "#" },
    { name: "Electric Hand Blender", link: "#" },
    { name: "Electric Hand Mixer", link: "#" },
  ];

  const rol2 = [
    { name: "Electric Hand Whisk", link: "#" },
    { name: "Kitchen Hand Blender", link: "#" },
    { name: "hand mixers", link: "#" },
    { name: "Hand Blender", link: "#" },
    { name: "Hand Mix", link: "#" },
    { name: "Hand Blenders", link: "#" },
    { name: "Robotic Hand", link: "#" },
    { name: "Hand Mixer", link: "#" },
    { name: "Juice Blenders", link: "#" },
  ];

  const rol3 = [
    { name: "Hand Egg Mixer", link: "#" },
    { name: "Mini Juicer", link: "#" },
    { name: "Juicer Blender", link: "#" },
    { name: "Stainless Blender", link: "#" },
    { name: "Stainless Steel Blender", link: "#" },
    { name: "Stainless Steel Blenders", link: "#" },
    { name: "Electric Shaker", link: "#" },
    { name: "Shaker", link: "#" },
    { name: "Baking Mixers", link: "#" },
  ];

  const rol4 = [
    { name: "Baking Kit", link: "#" },
    { name: "Manual Mixer", link: "#" },
    { name: "Manual Blender", link: "#" },
    { name: "Bread Mixer", link: "#" },
    { name: "Coffee Stirrers", link: "#" },
    { name: "Blenders For Coffee", link: "#" },
    { name: "Coffee Blender", link: "#" },
    { name: "Beat Maker", link: "#" },
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
