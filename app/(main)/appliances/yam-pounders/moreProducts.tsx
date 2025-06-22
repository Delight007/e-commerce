import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Pounder", link: "#" },
    { name: "Juice Blenders", link: "#" },
    { name: "Yam Pounder", link: "#" },
    { name: "Electric Yam Pounder", link: "#" },
    { name: "Juicer Blender", link: "#" },
    { name: "Mini Juicer", link: "#" },
    { name: "Whisking Machine", link: "#" },
    { name: "Mixing Machine", link: "#" },
    { name: "Blending Machine", link: "#" },
  ];

  const rol2 = [
    { name: "Mixer Machine", link: "#" },
    { name: "Blender Machine", link: "#" },
    { name: "Whisk Machine", link: "#" },
    { name: "Mac Mini", link: "#" },
    { name: "Food Blenders", link: "#" },
    { name: "Food Blender", link: "#" },
    { name: "Pet Food", link: "#" },
    { name: "Food Mixer", link: "#" },
    { name: "Pounding Machine", link: "#" },
  ];

  const rol3 = [
    { name: "Pro Blenders", link: "#" },
    { name: "Pounded Yam Machine", link: "#" },
    { name: "Stainless Blender", link: "#" },
    { name: "Poundo", link: "#" },
    { name: "Poundo Yam", link: "#" },
    { name: "Blender And Grinder", link: "#" },
    { name: "Grinder", link: "#" },
    { name: "Mixer Grinder", link: "#" },
    { name: "Blender Grinder", link: "#" },
  ];

  const rol4 = [
    { name: "Mini Grinder", link: "#" },
    { name: "Electric Grinder", link: "#" },
    { name: "Grinder And Blender", link: "#" },
    { name: "Poundo Yam Machine", link: "#" },
    { name: "Crushers", link: "#" },
    { name: "Food Processor And Blender", link: "#" },
    { name: "Food Processor Blender", link: "#" },
    { name: "Food Processor", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3">Where to Buy Yam Pounders Online</h1>
          <p className="text-[13px]">
            Discover different varieties of yam pounders on Gana, Nigeria. The
            electronic yam pounding machine pounds yam smoothly in a very short
            time. For this home appliance, all you need to do is boil your yam,
            plug the machine and voila in just one minute, you would have a
            really smooth pounded yam to complete your meal. These yam-pounding
            appliances feature high speed performance, easy-to-operate built in
            auto controls and available spare parts. Gana offers you durable,
            time saving and easy-to-maintain yam pounding machines at
            budget-friendly prices. On this online shop, you get to save on cost
            of buying kitchen appliances. Get all cooking appliances from top
            brands such as Eat Right yam pounder, Qasa yam pounder, Otis yam
            pounder and many more here. Now you can enjoy smooth, elastic,
            natural African pounded yam meals without stress. Get your pounded
            yam machines today and experience online shopping like never before.
            You can also get all your cooking appliances here at affordable
            rates.
          </p>
        </div>
      </div>
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
