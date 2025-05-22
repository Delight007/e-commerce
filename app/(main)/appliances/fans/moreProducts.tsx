import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Air Conditioner Fresh", link: "#" },
    { name: "Vent Fan", link: "#" },
    { name: "House Vents", link: "#" },
    { name: "Ventilation Fan", link: "#" },
    { name: "No Vent Air Conditioner", link: "#" },
    { name: "Kitchen Vent Fan", link: "#" },
    { name: "Ventilator Fan", link: "#" },
    { name: "Ventilators", link: "#" },
    { name: "Gen Cool AC", link: "#" },
  ];

  const rol2 = [
    { name: "Ac Rechargeable Fan", link: "#" },
    { name: "Rechargeable Ac Fan", link: "#" },
    { name: "Rechargeable Fans", link: "#" },
    { name: "Rechargable Fan", link: "#" },
    { name: "Rechargeable Fan", link: "#" },
    { name: "Ac Recharge", link: "#" },
    { name: "Rechargeable Ac", link: "#" },
    { name: "Portable Kitchen", link: "#" },
    { name: "Portable Heater", link: "#" },
  ];

  const rol3 = [
    { name: "Portable Air Purifier", link: "#" },
    { name: "Foldable Fans", link: "#" },
    { name: "Mini AC", link: "#" },
    { name: "Mini Heater", link: "#" },
    { name: "Mini Air Conditioner", link: "#" },
    { name: "Small Fan", link: "#" },
    { name: "Usb Air Conditioner", link: "#" },
    { name: "Usb Fan", link: "#" },
    { name: "Rechargeable Portable Fan", link: "#" },
  ];

  const rol4 = [
    { name: "Portable Rechargeable Fan", link: "#" },
    { name: "Portable Rechargeable Fans", link: "#" },
    { name: "Foldable Rechargeable Fan", link: "#" },
    { name: "Mini Rechargeable Fans", link: "#" },
    { name: "Rechargeable Mini Fan", link: "#" },
    { name: "Mini Rechargeable Fan", link: "#" },
    { name: "Small Rechargeable Fan", link: "#" },
    { name: "Small Rechargeable Fans", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3">
            Where to buy Standing & Ceiling Fans Online?
          </h1>
          <p className="text-[13px]">
            Enjoy a cool environment with quality fans when you shop online at
            Gana Nigeria. We have different kinds of fans ranging from ceiling
            fans to industrial, wall, table top, electric and standing fans. A
            fan consists of a rotating arrangement of blades which act on air
            and produces cool breeze. Mechanical fans are powered by electric
            motors, but other sources of power may be used, including hydraulic
            motors and internal combustion engines. With our rechargeable fans,
            you are sure of cool air, with or without power supply. They have a
            silent operation and are capable of charging while being used. You
            do not even need to go too far to look for such efficiency, all you
            have to do is log on Gana Nigeria and make your selection. With fans
            available on Gana, you can be assured of a pleasant atmosphere in
            your home or office.
          </p>

          <h1 className="font-medium py-3">Cooling Fans on Gana</h1>
          <p className="text-[13px]">
            Discover a wide variety of durable fans online on Gana Nigeria at
            best prices. They are very compact and can be moved around,
            depending on where you want them. Regardless of your choice, you get
            the cool breeze you need to neutralize the hot air around you. For
            students, table top fans are very ideal, as they can be easily moved
            to different positions. Our industrial fans which can be used both
            indoors and outdoors, are very useful in office environments. Get
            yourself quality rechargeable and non- rechargeable fans from top
            manufacturers such as Lontor, Andrakk, Century, Samsung, LG, Sonik,
            and so many more. With such authentic brands on ground, you can
            never lose your cool having a rechargeable standing fan.
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
