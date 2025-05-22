import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Cooking Pot Set", link: "#" },
    { name: "Cooking Pots Set", link: "#" },
    { name: "Small Blender", link: "#" },
    { name: "Cooking Blenders", link: "#" },
    { name: "Mini Blenders", link: "#" },
    { name: "Small Blenders", link: "#" },
    { name: "Mini Blender", link: "#" },
    { name: "Kitchen Appliance Storage", link: "#" },
    { name: "Electric Grinder", link: "#" },
  ];

  const rol2 = [
    { name: "Mini Whisk", link: "#" },
    { name: "Cooking Plate", link: "#" },
    { name: "Gas Cooker Cylinder", link: "#" },
    { name: "Gas Regulator", link: "#" },
    { name: "Gas Cooker With Cylinder", link: "#" },
    { name: "Gas Cylinder With Burner", link: "#" },
    { name: "Chopsticks", link: "#" },
    { name: "Small Weights", link: "#" },
    { name: "Cooking Spoon Set", link: "#" },
  ];

  const rol3 = [
    { name: "Gas Hose", link: "#" },
    { name: "Non Stick Pots", link: "#" },
    { name: "Non Stick Cooking Pot", link: "#" },
    { name: "Non Stick Cooking Pots", link: "#" },
    { name: "Vacuum Cooking", link: "#" },
    { name: "Sealer", link: "#" },
    { name: "Mini Grill", link: "#" },
    { name: "Mini Vacuum", link: "#" },
    { name: "Mini Sealer", link: "#" },
  ];

  const rol4 = [
    { name: "Cooking Spices", link: "#" },
    { name: "Cylinder Regulator", link: "#" },
    { name: "Gas Cylinder Regulator", link: "#" },
    { name: "Vacuum Sealer", link: "#" },
    { name: "Non Stick Fry Pan", link: "#" },
    { name: "Non Stick Pan", link: "#" },
    { name: "Non Stick Frying Pan", link: "#" },
    { name: "4 Burner Gas Cooker", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2">
          <h1 className="font-medium py-3">
            Kitchen Accessories Price in Nigeria
          </h1>
          <p className="text-[13px]">
            Gana is offering very affordable prices to you. You can avail
            several different discounts which will make your shopping more
            convenient. Also, you can avail several bundles offers like getting
            a set of products rather than just one. This will save you a lot of
            money and will make shopping easier. If you want further cheaper
            products then you can look for second-hand items. Used items are
            generally very inexpensive. All the products offered here are of a
            really good quality and will not let you down. The products are sold
            by verified sellers which means that there is a guarantee that the
            products are of excellent quality. So you can easily get all kitchen
            accessories in Nigeria at reasonable prices.
          </p>
          <h1 className="font-medium py-3">
            Get All Your Favorite Kitchen Accessories at Gana!
          </h1>
          <p className="text-[13px]">
            Kitchen accessories are very important for everybody. You can get a
            huge variety here at reasonable prices. There is a cash on delivery
            option for you which will be good for people who do not want to give
            away their credit card or debit card number. However, you do have
            the option to pay with your card. The products will be delivered at
            your doorstep anywhere in Nigeria. This will eliminate the hassle of
            getting it yourself. This is especially good if you want a heavy
            item like a cabinet or something. You would not have to pick it up
            yourself and bring it your house. For a better buying experience,
            you can look at several customer reviews. These reviews will help
            you know which products are liked by different buyers. Also, you can
            get know how their experience was while using the products.
            Everything is available for you under one roof which reduces the
            fatigue of roaming around in busy markets. So go on ahead and get
            all your favourite kitchen accessories with Gana. Do not worry about
            the quality and prices as the quality is excellent and prices are
            affordable. Happy shopping with Gana!
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
