import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Steamer Iron", link: "#" },
    { name: "Travel Iron", link: "#" },
    { name: "Steamery", link: "#" },
    { name: "Irons Steamers", link: "#" },
    { name: "Clothes Steamer", link: "#" },
    { name: "Cloth Steamer", link: "#" },
    { name: "Garment Steamer", link: "#" },
    { name: "Laundry Machine", link: "#" },
    { name: "Ironing Machine", link: "#" },
  ];

  const rol2 = [
    { name: "Mac Mini", link: "#" },
    { name: "Handheld Steamer", link: "#" },
    { name: "Handheld Garment Steamer", link: "#" },
    { name: "2 Iron", link: "#" },
    { name: "Small Washing Machine", link: "#" },
    { name: "Mini Washing Machine", link: "#" },
    { name: "Laundry Washing Machine", link: "#" },
    { name: "Washing Machine Laundry", link: "#" },
    { name: "Washing Machine Small", link: "#" },
  ];

  const rol3 = [
    { name: "Mini Washer", link: "#" },
    { name: "Steam Press", link: "#" },
    { name: "Steam Press Iron", link: "#" },
    { name: "Electric Pressing Iron", link: "#" },
    { name: "Steam Pressing Iron", link: "#" },
    { name: "Steam Iron Press", link: "#" },
    { name: "Portable Steamer", link: "#" },
    { name: "Philips Iron", link: "#" },
    { name: "Solar Iron", link: "#" },
  ];

  const rol4 = [
    { name: "Small Generator", link: "#" },
    { name: "Mini Generator", link: "#" },
    { name: "Generator Iron", link: "#" },
    { name: "Home Inverter", link: "#" },
    { name: "Inverter Home", link: "#" },
    { name: "Solar Pressing Iron", link: "#" },
    { name: "Washing Machines With Spin", link: "#" },
    { name: "Philips Dry Iron Hd1172", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3"> Want to buy a Steam Iron?</h1>
          <p className="text-[13px]">
            Having a good clothing line and dressing cool is nice but when you
            have rumpled and rough clothes, you look shabby and untidy in it.
            Irons are an essential tool in the home because they take care of
            your clothes and make them fit for wearing. A rumpled shirt for
            David wej, would look really odd on any man, and a squeezed dress
            from Wana Sambo will make any lady look out of place in any
            gathering or event. A lot of pressing irons are in the market, but
            why buy what will get your clothes burnt or damaged. Gana has
            quality pressing iron and ironing board in stock that will get your
            laundry done with less effort. After finding your perfect look with
            our classy shirts for men, you need a high tech, quality iron to
            take care of it at anytime at all time.
          </p>
          <h1 className="font-medium py-3">Irons from Gana</h1>
          <p className="text-[13px]">
            For a rumpled cotton David Wej shirt, a Philips steam Iron will make
            it as smooth as silk making you look smart and professional. The dry
            iron will take care of your silk and linen dresses giving you that
            glittery look and spark. Other brands of ironing machine on Gana are
            Panasonic steam and dry iron and other models from Philips. Gana is
            the best place to get industrial laundry steam iron in Nigeria.
            Online stores are the way of the future for buying your books,
            phones, electronics, toys and more at the click of a button. Buy
            premium quality pressing irons online at Jumia at the best price in
            Nigeria.
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
