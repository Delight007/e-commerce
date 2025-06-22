import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Kitchen Blenders", link: "#" },
    { name: "Electrical Blender", link: "#" },
    { name: "Electric Blenders", link: "#" },
    { name: "Ai Robot", link: "#" },
    { name: "robot", link: "#" },
    { name: "Whisk", link: "#" },
    { name: "Mini Whisk", link: "#" },
    { name: "Electric Whisk", link: "#" },
    { name: "mixers", link: "#" },
  ];

  const rol2 = [
    { name: "Office For Mac", link: "#" },
    { name: "mac mini", link: "#" },
    { name: "Electric Mixer", link: "#" },
    { name: "Kitchen Machine", link: "#" },
    { name: "Mini Juicer", link: "#" },
    { name: "Juice Blenders", link: "#" },
    { name: "Juicer Blender", link: "#" },
    { name: "coffee", link: "#" },
    { name: "Portable Kitchen", link: "#" },
  ];

  const rol3 = [
    { name: "milk", link: "#" },
    { name: "Espresso Coffee", link: "#" },
    { name: "Creams", link: "#" },
    { name: "cream", link: "#" },
    { name: "food", link: "#" },
    { name: "Pet Food", link: "#" },
    { name: "iced cream", link: "#" },
    { name: "Ice Cream Machine", link: "#" },
  ];

  const rol4 = [
    { name: "Kitchen Sets", link: "#" },
    { name: "dinning set", link: "#" },
    { name: "Cup", link: "#" },
    { name: "K Cups", link: "#" },
    { name: "cups", link: "#" },
    { name: "maker", link: "#" },
    { name: "Mini AC", link: "#" },
    { name: "gen set", link: "#" },
  ];

  return (
    <div className="bg-white w-full p-3 border-b">
      <div className="border-b pb-3">
        <h2 className="text-xl pb-3">
          Small Kitchen Appliances: Elevate Your Cooking Experience
        </h2>
        <p className="text-[12px]">
          Are you tired of the hassle of traditional cooking methods? Small
          kitchen appliances are here to revolutionize your culinary journey!
          From blending smoothies to grilling sandwiches, these compact
          powerhouses can help you save time and effort in the kitchen.
        </p>
        <h2 className="text-xl py-3">
          Explore our wide range of small kitchen appliances at Gana, including:
        </h2>
        <div className="text-[12px] py-2">
          <li>
            <span className="font-medium underline">
              Countertop Blenders or Kitchen Blenders:
            </span>
            Stock Blend smoothies, soups, and sauces effortlessly.
          </li>
          <li>
            <span className="font-medium underline">Kettles:</span>
            Boil water quickly for tea, coffee, and instant noodles.
          </li>
          <li>
            <span className="font-medium underline">Cookers:</span>
            Prepare delicious meals with ease, from slow-cooked stews to crispy
            fried foods
          </li>
          <li>
            <span className="font-medium underline">Citrus Juicers:</span>{" "}
            Squeeze fresh juice from lemons, limes, and oranges.
          </li>
          <li>
            <span className="font-medium underline">Microwaves:</span> Reheat
            meals, defrost frozen foods, and cook a variety of dishes.
          </li>
          <li>
            <span className="font-medium underline">Hand Mixers: </span> Whip up
            cakes, pastries, and other treats with precision.
          </li>
          <li>
            <span className="font-medium underline">Toasters:</span> Enjoy
            perfectly toasted bread, bagels, and croissants every morning.
          </li>
        </div>

        <p className="text-[12px] pb-2">
          Whether you're a seasoned chef or a budding home cook, our small
          kitchen appliances are designed to meet your needs. With easy-to-use
          features, stylish designs, and affordable prices, you can upgrade your
          kitchen without breaking the bank.
        </p>
        <p className="text-[14px]">
          Discover the perfect small kitchen appliance for your home today!
        </p>
      </div>
      <div className="bg-white">
        <div className="w-full justify-center items-center p-2 grid grid-cols-4">
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
    </div>
  );
}
