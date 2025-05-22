import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Ac Cooling Fans", link: "#" },
    { name: "Air Purifier Fan", link: "#" },
    { name: "Cooling Fan", link: "#" },
    { name: "Household Fan", link: "#" },
    { name: "Ac Fan", link: "#" },
    { name: "Desk Air Conditioner", link: "#" },
    { name: "Desk Heaters", link: "#" },
    { name: "House Vents", link: "#" },
    { name: "No Vent Air Conditioner", link: "#" },
  ];

  const rol2 = [
    { name: "Ventilators", link: "#" },
    { name: "Ventilator Fan", link: "#" },
    { name: "Ventilation Fan", link: "#" },
    { name: "Kitchen Vent Fan", link: "#" },
    { name: "Vent Fan", link: "#" },
    { name: "Thermal Socks", link: "#" },
    { name: "Heated Socks", link: "#" },
    { name: "Spa Kit", link: "#" },
    { name: "Space Heater", link: "#" },
  ];

  const rol3 = [
    { name: "Cool Room Accessories", link: "#" },
    { name: "Room Heater", link: "#" },
    { name: "Room Freshener", link: "#" },
    { name: "Room Accessories", link: "#" },
    { name: "Electric Room Heater", link: "#" },
    { name: "Foldable Fans", link: "#" },
    { name: "Small Fan", link: "#" },
    { name: "Mini Electric Fan", link: "#" },
    { name: "Foldable Desk", link: "#" },
  ];

  const rol4 = [
    { name: "Folding Desk", link: "#" },
    { name: "Foldable Office Desk", link: "#" },
    { name: "Mini Desk", link: "#" },
    { name: "Small Desk", link: "#" },
    { name: "Small Office Desk", link: "#" },
    { name: "Heating Pad", link: "#" },
    { name: "Thermal Pad", link: "#" },
    { name: "Clothes Dryer", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3 ">
            {" "}
            High-Quality Heaters for Sale at Gana Nigeria
          </h1>
          <p className="text-[13px]">
            People pay a great amount of attention when it comes to buying home
            and living products. Each item is of the utmost importance for you
            to complete your home. When you think about home appliances, one of
            the most significant ones are heaters. These devices are absolutely
            necessary for the winters when the cold becomes unbearable.
            Different styles and sizes are available to choose from depending on
            the type of setting. If you want to do some online shopping for
            heaters, then Gana is the place for you. We have the largest range
            available at the best prices to choose from.
          </p>

          <h1 className="font-medium py-3 ">Electric vs Gas Heaters</h1>
          <p className="text-[13px]">
            When it comes to heaters, there are two types available. The first
            one is the electric heater that uses electricity to run and the
            other one is a gas heater that uses a specific amount of gas to run
            itself. The Electric heater is known to offer high energy efficiency
            as it easily heats up a room in a short matter of time. It can be
            used in closed spaces as it is not harmful to health. Due to its
            small sizes, it is the best option to use if you want to have a
            portable heating option. It requires a continuous electrical outlet
            so should be placed near a power unit. Some of them use electricity
            as equivalent to an air conditioner. A Gas heater is less expensive
            as compared to an electric heater. It also offers great portability
            as the gas pipe can be attached as long as you want. It has the
            ability to function if power outages occur and you will have
            continuous heat. Another benefit is that gives heat very quickly.
            One thing to keep in mind here is that no home décor should be
            placed near it or it might catch fire.
          </p>

          <h1 className="font-medium py-3 ">Types of heaters available</h1>
          <p className="text-[13px]">
            There are a wide range of heaters available and buying any one of
            these is according to your own requirements. Convection heaters are
            the most convenient and energy efficient ones out there. These are
            used to heat large spaces in a short period of time. It stores heat
            in itself and then distributes it evenly throughout the whole room.
            Fan-forced Ceramic heaters give out warm air that can be centred
            towards one specific area. It has self-regulating elements that cut
            off heat when it gets too warm. These come in a wide range of sizes
            to meet a number of needs. Radiant heaters are known as reflective
            heaters that generate heat using infrared rays. These make you feel
            like you are standing in the sun. This type of heater is best for a
            small group of people who want to get warm in a quick manner.
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
