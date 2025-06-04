import { link } from "fs";
import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Electric Blenders", link: "#" },
    { name: "Portable Kitchen", link: "#" },
    { name: "Portable Juice Blender", link: "#" },
    { name: "Portable Blender", link: "#" },
    { name: "Portable Blenders", link: "#" },
    { name: "Fruit Juicer", link: "#" },
    { name: "robot", link: "#" },
    { name: "Ai Robot", link: "#" },
    { name: "mixers", link: "#" },
  ];

  const rol2 = [
    { name: "Electric Mixer", link: "#" },
    { name: "Mini Whisk", link: "#" },
    { name: "Electric Whisk", link: "#" },
    { name: "Whisk", link: "#" },
    { name: "Fruit Blenders", link: "#" },
    { name: "Fruit Blender", link: "#" },
    { name: "Usb Mini A", link: "#" },
    { name: "Usb B", link: "#" },
    { name: "Usb B To Usb A", link: "#" },
  ];

  const rol3 = [
    { name: "Usb Blender", link: "#" },
    { name: "Office For Mac", link: "#" },
    { name: "mac mini", link: "#" },
    { name: "Fruit Mix", link: "#" },
    { name: "Kitchen Machine", link: "#" },
    { name: "Juicer Machine", link: "#" },
    { name: "Small Juicer Machine", link: "#" },
    { name: "milk", link: "#" },
    { name: "Fruit Mixer", link: "#" },
  ];

  const rol4 = [
    { name: "smoothie blender", link: "#" },
    { name: "Small Smoothie Blender", link: "#" },
    { name: "blenders for smoothies", link: "#" },
    { name: "Blender Smoothie", link: "#" },
    { name: "Smoothie Blenders", link: "#" },
    { name: "cups", link: "#" },
    { name: "Cup", link: "#" },
    { name: "K Cups", link: "#" },
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
