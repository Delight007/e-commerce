import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Small Blender", link: "#" },
    { name: "Small Blenders", link: "#" },
    { name: "Food Processor Blender", link: "#" },
    { name: "Food Processor And Blender", link: "#" },
    { name: "Blender Food Processor", link: "#" },
    { name: "Kitchen Blenders", link: "#" },
    { name: "Food Blenders", link: "#" },
    { name: "Mac Mini", link: "#" },
    { name: "Food Grinder", link: "#" },
  ];

  const rol2 = [
    { name: "Mini Grinder", link: "#" },
    { name: "Grinder", link: "#" },
    { name: "Electrical Blender", link: "#" },
    { name: "Electric Blenders", link: "#" },
    { name: "Food Mixer", link: "#" },
    { name: "Electric Mixer", link: "#" },
    { name: "Whisk", link: "#" },
    { name: "Electric Whisk", link: "#" },
    { name: "Mini Whisk", link: "#" },
  ];

  const rol3 = [
    { name: "Mini Juicer", link: "#" },
    { name: "Juicer Blender", link: "#" },
    { name: "Juice Blenders", link: "#" },
    { name: "Food Processor With Juicer", link: "#" },
    { name: "Crushers", link: "#" },
    { name: "Electric Grinder", link: "#" },
    { name: "Grinder And Blender", link: "#" },
    { name: "Blender And Grinder", link: "#" },
    { name: "Blender Grinder", link: "#" },
  ];

  const rol4 = [
    { name: "Pounding Machine", link: "#" },
    { name: "Manual Food Processor", link: "#" },
    { name: "Pounded Yam Machine", link: "#" },
    { name: "Kitchen Chopper", link: "#" },
    { name: "Mini Chopper", link: "#" },
    { name: "Food Chopper", link: "#" },
    { name: "Chopper", link: "#" },
    { name: "Mixer Grinder", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3">
            Where to Buy Food Processor Online?
          </h1>
          <p className="text-[13px]">
            We have a large collection of versatile food processors that can
            perform a number of functions like chopping, mincing, slicing,
            shredding and more. With the various food processors available such
            as hand blender, cake mixer on Gana, you can process varieties of
            food like fruits, vegetables, meat, dairy products and more. These
            efficient food processors are very reliable and you will be able to
            prepare large amount of ingredients for all kinds of meals. We will
            offer you appliances that will last you for a long time and you will
            get great value for your money. The food processors use electricity
            and it will not spike up your power consumption. When you shop
            online at Gana Nigeria, you will enjoy flexible payment options like
            paying cash on delivery. Select, click and we will deliver to your
            doorstep anywhere in Nigeria. You can also get other appliances like
            Kettles, Microwaves and more online.
          </p>
          <h1 className="font-medium py-3">Buy Food Processors on Gana</h1>
          <p className="text-[13px]">
            Discover best food Processors online on Gana that will make cooking
            easy for you. It can be used in homes, restaurants, hotels and more.
            We offer the best small appliances from top brands like Scanfrost,
            Daewoo Internatinal, Home Tech, Morphy Richards, Breville, Universal
            and more at the best prices in Nigeria. If you want to live a
            healthy lifestyle, then you need to get one of our food processors
            available online on Gana Nigeria. We will deliver to you anywhere in
            Nigeria, this will eliminate the stress of going to the market or
            shopping malls to get your appliances. Gana is the online store you
            can trust for all your home appliances. Make your stay int he
            kitchen an enjoyable one each time you use our food processors.
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
