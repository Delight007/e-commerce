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
    <div className="w-full  bg-white px-4">
      <div className="border-b py-3 ">
        <h2 className="text-xl">Where to Buy Split Air-Conditioners Online?</h2>
        <p className="text-[12px] py-3">
          Get the best split air conditioners prices in Nigeria online at gaNa
          as you will be getting good value for money when you shop with us. A
          Split air-conditioner is a major home appliance designed to distribute
          condition air and change the air temperature in the room. Nothing is
          more relaxing when getting home from work, have your shower and relax
          with the air-conditioners that split hot air from cold making you have
          a relaxed body after a long days work. At gaNa, we have various split
          air-conditioners from trusted brands like LG, Samsung, Panasonic,
          Polystar and so much more for you to choose and place in any room in
          your home or office. Get the best split air conditioners prices in
          Nigeria online gaNa as you will be getting good value for money when
          you shop with us. Look through split air conditioners reviews so you
          can make the perfect choice. The Samsung split air conditioner is one
          which will guarantee a cool environment in your home or office.
        </p>
        <h2 className="text-base">Split Air-Conditioners on Gana</h2>
        <p className="text-[12px] py-3">
          You can efficiently and stylishly cool off your home with our split
          air-conditioners that come in different horse power to fit the size of
          your room. Our split AC comes with great features like easy removal
          clean panel, sleep mode, fresh air function, low noise air flow
          system, auto restart function, light weight remote control and lots
          more so you can enjoy exceptional cooling power. The Split air
          conditioners quickly cools the room with strong refreshing air and
          control the temperature automatically so you can sleep comfortably all
          through the night. It has coated filters that always fill your home
          with fresh purified air thereby preventing the spread of bacteria in
          the home. Browse online gaNa and explore our split unit air
          conditioners made available for you to have a perfect air condition
          environment.
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
