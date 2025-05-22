import { link } from "fs";
import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Air Fryer For Ravioli", link: "#" },
    { name: "Air Fryer For Pork", link: "#" },
    { name: "Air Fryer For Apple Chips", link: "#" },
    { name: "Air Fryer For Hash Browns", link: "#" },
    { name: "Air Fryer For Avocado Fries", link: "#" },
    { name: "Air Fryer For Banana Chips", link: "#" },
    { name: "Air Fryer For Breakfast Burritos", link: "#" },
    { name: "Air Fryer For Cake", link: "#" },
    { name: "Air Fryer Meat", link: "#" },
  ];
  const rol2 = [
    { name: "Air Fryer For Tater Tots", link: "#" },
    { name: "Air Fryer For Fish Fingers", link: "#" },
    { name: "Air Fryer For Dumplings", link: "#" },
    { name: "Air Fryer For Corn Dogs", link: "#" },
    { name: "Air Fryer For Cinnamon Rolls", link: "#" },
    { name: "Air Fryer For Churros", link: "#" },
    { name: "Air Fryer For Chicken Kebabs", link: "#" },
    { name: "Air Fryer For Chicken Breasts", link: "#" },
    { name: "Air Fryer For Brownies", link: "#" },
  ];

  const rol3 = [
    { name: "Air Fryer For Shrimp", link: "#" },
    { name: "Air Fryer For Tofu", link: "#" },
    { name: "Air Fryer For Toasting Bread", link: "#" },
    { name: "Air Fryer For Steak", link: "#" },
    { name: "Air Fryer For Spring Rolls", link: "#" },
    { name: "Air Fryer For Sausage", link: "#" },
    { name: "Air Fryer For Roasted Vegetables", link: "#" },
    { name: "Air Fryer For Rice", link: "#" },
    { name: "Air Fryer For Meatballs", link: "#" },
  ];

  const rol4 = [
    { name: "Air Fryer Veg", link: "#" },
    { name: "Air Fryer For Meat", link: "#" },
    { name: "Air Fryer For Fish Fillets", link: "#" },
    { name: "Air Fryer For Veggie Burgers", link: "#" },
    { name: "Air Fryer For Waffles", link: "#" },
    { name: "Air Fryer For Cookies", link: "#" },
    { name: "Air Fryer For BreadAir Fryer For Bacon", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2 gap-4">
          <div className="">
            <h1 className="font-medium py-3">
              Juicers: Your Daily Dose of Freshness
            </h1>
            <p className="text-[13px] py-3">
              Are you looking to incorporate more fresh fruits and vegetables
              into your diet? A juicer is the perfect tool to help you achieve
              your health goals. With a juicer, you can easily create delicious
              and nutritious juices that are packed with vitamins, minerals, and
              antioxidants.
            </p>
          </div>
          <div>
            <h1 className="font-medium py-3"> Explore Our Range of Juicers</h1>
            <p className="text-[13px] py-3">
              At Gana, we offer a wide range of juicers to suit your needs and
              budget. Whether you're a beginner or a seasoned juicing
              enthusiast, you're sure to find the perfect juicer for you.
            </p>

            <div className="py-3">
              <li className="text-[13px]">
                <span className="font-medium underline">Slow Juicers:</span>{" "}
                Gentle extraction for maximum nutrient retention.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">
                  Centrifugal Juicers:
                </span>{" "}
                Fast and efficient juicing for everyday use.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">Citrus Juicers:</span>{" "}
                Perfect for squeezing fresh juice from oranges, lemons, and
                limes.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">
                  Masticating Juicers:
                </span>{" "}
                Slow and thorough extraction for rich, nutrient-dense juice.
              </li>
            </div>
          </div>
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
