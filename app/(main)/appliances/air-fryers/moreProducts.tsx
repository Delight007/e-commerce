import { link } from "fs";
import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Air Fryer Chips", link: "#" },
    { name: "Air Fryer For Mozzarella Sticks", link: "#" },
    { name: "Air Fryer For Mini Quiches", link: "#" },
    { name: "Air Fryer For Chicken", link: "#" },
    { name: "Air Fryer For Apple Chips", link: "#" },
    { name: "Air Fryer For Avocado Fries", link: "#" },
    { name: "Air Fryer For Banana Chips", link: "#" },
    { name: "Air Fryer For Breakfast Burritos", link: "#" },
    { name: "Air Fryer For Brownies", link: "#" },
  ];

  const rol2 = [
    { name: "Air Fryer For Chicken Breasts", link: "#" },
    { name: "Air Fryer For Chicken Kebabs", link: "#" },
    { name: "Air Fryer For Churros", link: "#" },
    { name: "Air Fryer For Cinnamon Rolls", link: "#" },
    { name: "Air Fryer For Corn Dogs", link: "#" },
    { name: "Air Fryer For Dumplings", link: "#" },
    { name: "Air Fryer For Fish Fingers", link: "#" },
    { name: "Air Fryer For Hash Browns", link: "#" },
    { name: "Air Fryer For Loaded Nachos", link: "#" },
  ];

  const rol3 = [
    { name: "Air Fryer For Bacon", link: "#" },
    { name: "Mini Air Fryer", link: "#" },
    { name: "Air Fryer For Sausage", link: "#" },
    { name: "Air Fryer For Spring Rolls", link: "#" },
    { name: "Air Fryer For Steak", link: "#" },
    { name: "Air Fryer For Toasting Bread", link: "#" },
    { name: "Air Fryer For Tofu", link: "#" },
    { name: "Air Fryer Meat", link: "#" },
    { name: "Air Fryer Veg", link: "#" },
  ];

  const rol4 = [
    { name: "Air Fryer For Meatballs", link: "#" },
    { name: "Kitchen Appliances", link: "#" },
    { name: "Kitchen Appliance", link: "#" },
    { name: "Air Fryer For Roasted Vegetables", link: "#" },
    { name: "Air Fryer For Roast Chicken", link: "#" },
    { name: "Air Fryer For Chicken Tenders", link: "#" },
    { name: "Air Fryer For Eggs", link: "#" },
    { name: "Air Fryer For Cookies", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2 gap-4">
          <div className="">
            <h1 className="font-medium py-3">
              Air Fryers: Healthy and Delicious, the Easy Way
            </h1>
            <p className="text-[13px] py-3">
              Looking to cook crispy, golden-brown foods without the guilt of
              deep-frying? Air fryers are the perfect solution! These innovative
              kitchen appliances use circulating hot air to cook a variety of
              dishes, from crispy fries to juicy chicken wings.
            </p>
          </div>
          <div>
            <h1 className="font-medium py-3">Why Choose an Air Fryer?</h1>

            <div className="py-3">
              <li className="text-[13px]">
                <span className="font-medium underline">Healthier Eating:</span>
                Air fryers use little to no oil, making them a healthier
                alternative to traditional frying.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">
                  Versatile Cooking:
                </span>
                From appetizers to main courses, air fryers can handle a wide
                range of dishes.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline"> Easy to Use:</span>{" "}
                Simple controls and quick cook times make air fryers
                user-friendly.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">Energy Efficient:</span>
                Air fryers use less energy than traditional ovens.
              </li>
            </div>
          </div>
          <div>
            <h1 className="font-medium py-3">
              Explore Our Range of Air Fryers
            </h1>
            <p className="text-[13px] py-3">
              Gana Nigeria offers a wide range of air fryers to suit your needs.
              Whether you're a busy parent, a health-conscious individual, or a
              culinary enthusiast, you'll find the perfect air fryer for your
              kitchen
            </p>

            <div className="py-3">
              <li className="text-[13px]">
                <span className="font-medium underline">
                  {" "}
                  Digital Air Fryers:
                </span>
                For precise temperature control and smart features.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">
                  Compact Air Fryers:
                </span>
                Ideal for small kitchens and limited counter space.
              </li>
              <li className="text-[13px]">
                <span className="font-medium underline">
                  Large Capacity Air Fryers:
                </span>{" "}
                Perfect for families and entertaining.
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
