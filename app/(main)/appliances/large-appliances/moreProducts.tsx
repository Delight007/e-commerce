import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Laundry Machine", link: "#" },
    { name: "Laundry Washing Machine", link: "#" },
    { name: "Washing Machine Laundry", link: "#" },
    { name: "Laundry Dryer", link: "#" },
    { name: "fridges", link: "#" },
    { name: "Fridge", link: "#" },
    { name: "Office Fridge", link: "#" },
    { name: "refriggerator", link: "#" },
    { name: "Refrigerator", link: "#" },
  ];

  const rol2 = [
    { name: "Washer And Dryer", link: "#" },
    { name: "Blower", link: "#" },
    { name: "Household Fan", link: "#" },
    { name: "fan", link: "#" },
    { name: "House Vents", link: "#" },
    { name: "House Doors", link: "#" },
    { name: "Ac Fan", link: "#" },
    { name: "Cooker", link: "#" },
    { name: "G Unit", link: "#" },
  ];

  const rol3 = [
    { name: "Stove", link: "#" },
    { name: "Cooking Stove", link: "#" },
    { name: "Gas Stove", link: "#" },
    { name: "burner", link: "#" },
    { name: "Gas Burner", link: "#" },
    { name: "Gas Cooker", link: "#" },
    { name: "Incense Burner", link: "#" },
    { name: "Gas Stove Burner", link: "#" },
    { name: "Vent Fan", link: "#" },
  ];

  const rol4 = [
    { name: "Ventilators", link: "#" },
    { name: "Ventilator Fan", link: "#" },
    { name: "Ventilation Fan", link: "#" },
    { name: "Mini Air Conditioner", link: "#" },
    { name: "Split Air Conditioner", link: "#" },
    { name: "Split Air Condition", link: "#" },
    { name: "Fan Air Conditioner", link: "#" },
    { name: "No Vent Air Conditioner", link: "#" },
  ];

  return (
    <div className="bg-white w-full p-3 border-b">
      <div className="border-b pb-3">
        <h2 className="text-xl pb-3">Large Kitchen Appliances</h2>
        <p className="text-[12px]">
          Elevate your home cooking experience with our range of Large Kitchen
          Appliances. From deep freezers to built-in dishwashers, we've got
          everything you need to transform your kitchen into a culinary haven.
        </p>
        <h2 className="text-xl py-3">
          Simplify Your Life with These Essential Appliances:
        </h2>
        <div className="text-[12px] py-2">
          <li>
            <span className="font-medium underline">Deep Freezers:</span> Stock
            up on your favorite foods and keep them fresh for longer with our
            energy-efficient deep freezers.
          </li>
          <li>
            <span className="font-medium underline">Built-in Dishwasher: </span>
            Spend less time doing dishes and more time enjoying your meals with
            our sleek and stylish built-in dishwashers.
          </li>
          <li>
            <span className="font-medium underline">Wall Ovens:</span>
            Perfect for baking, roasting, and grilling, our wall ovens offer
            precise temperature control and even heat distribution.
          </li>
          <li>
            <span className="font-medium underline">Coffee Machines:</span>{" "}
            Start your day right with a delicious cup of coffee, brewed to
            perfection with our range of coffee and espresso machines.
          </li>
        </div>

        <p className="text-[12px] pb-2">
          Whether you're a seasoned home cook or a budding chef, our large
          kitchen appliances are designed to make your life easier and your
          cooking more enjoyable.
        </p>
        <p className="text-[14px]">
          Explore our collection today and discover the perfect appliance for
          your kitchen
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
