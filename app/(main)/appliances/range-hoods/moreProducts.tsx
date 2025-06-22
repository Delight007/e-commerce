import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Gas Cooker 6 Burner", link: "#" },
    { name: "6 Burner Gas Cooker", link: "#" },
  ];

  const rol2 = [
    { name: "Gas Cooker 60Cm", link: "#" },
    { name: "Digital Cooker Hood", link: "#" },
  ];

  const rol3 = [
    { name: "Furnace Filters", link: "#" },
    { name: "Kitchen Air Extractor", link: "#" },
  ];

  const rol4 = [{ name: "Air Extractor", link: "#" }];

  return (
    <div className="w-full  bg-white px-4">
      <div className="border-b py-3 ">
        <h2 className="text-xl font-medium">
          Where to buy Rangehood Online in Nigeria
        </h2>
        <p className="text-[12px] py-3">
          Buy Rangehood online at gaNa to enjoy a healthy and beautiful kitchen.
          If you are planning a kitchen makeover or planning to redesign your
          kitchen, then you need a rangehood. It is a very important appliance
          to have in your kitchen as it would help in protecting you and your
          family, and visitors from smoke, grease, bad odors, fumes and more.
          The collection of rangehood online at gaNa will work effectively to
          help you remove any bad pollutant that may come from cooking. These
          appliances has a design that features a blower, which sucks smoke or
          steam and takes them out of the house through a ducted installation or
          ductless installation. Shop online today and we will deliver to your
          doorstep anywhere in Nigeria.
        </p>
        <h2 className="text-xl font-medium">Get Rangehood On Gana</h2>
        <p className="text-[12px] py-3">
          Without proper and adequate ventilation, smoke coming the kitchen can
          cause flu, difficulty in breathing and other symptoms. Get rangehood
          from brands like Polystar, FOTILE, Nesta, Hotpoint, Beko, Kitchencraft
          & more at the best price in Nigeria. Cooking produces a lot of heat,
          and this can make you feel really uncomfortable. Also, the smoke and
          steam coming from cooking can stain the wall and ceiling of your
          kitchen. Buy designer digital cooker, self-recycling hood with
          temperature and more and enjoy the best prices. Make your kitchen
          comfortable and attractive with rangehood. Eliminate smells,
          stuffiness and steam with this appliance available on gaNa. The way
          the hoods are installed makes it possible for you to get more light
          for cooking, you will have an awesome view of your food while cooking.
          You can also get Kitchen tools & accessories, tableware, cooking
          Knives, cookware and more online.
        </p>
      </div>
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
