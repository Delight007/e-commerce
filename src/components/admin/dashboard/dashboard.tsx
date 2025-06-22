import React from "react";
import SVGComponentI from "../../icon/shieldIcon";
import { FiShoppingBag } from "react-icons/fi";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiScan } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import Link from "next/link";

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-US", {
    // weekday: "long", // e.g., Monday
    year: "numeric", // e.g., 2025
    month: "long", // e.g., June
    day: "numeric", // e.g., 18
  });
  return (
    <div className=" relative px-4 top-[80px]">
      {/* main content */}

      <div className=" py-3 flex justify-between items-center ">
        <h1 className="font-semibold text-2xl">eCommerce</h1>
        <div className="rounded-full bg-white py-2 px-2 text-sm flex justify-center items-center gap-2">
          <MdOutlineDateRange className="text-lg " />
          {today} - {today}
        </div>
      </div>

      <div className=" mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="w-[223px] h-[126px] bg-white rounded-2xl flex items-center p-6 shadow-md">
          <div className=" flex  gap-10">
            <div className="w-[50px] h-[50px] bg-gray-200 text-red-500 flex items-center justify-center rounded-full">
              <SVGComponentI width={25} height={25} className="text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Customers</p>
            </div>
          </div>
        </div>
        <div className="w-[223px] h-[126px] bg-white rounded-2xl  flex items-center p-6 shadow-md">
          <div className=" flex  gap-20">
            <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center rounded-full">
              <FiShoppingBag className="text-2xl text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Order</p>
            </div>
          </div>
        </div>
        <div className="w-[223px] h-[126px] bg-white rounded-2xl  flex items-center p-6 shadow-md">
          <div className=" flex  gap-14">
            <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center rounded-full">
              <LuCircleDollarSign className="text-2xl text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Revenue</p>
            </div>
          </div>
        </div>
        <div className="w-[223px] h-[126px] bg-white rounded-2xl  flex items-center p-6  shadow-md">
          <div className=" flex  gap-14">
            <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center rounded-full">
              <RiExchangeDollarFill className="text-2xl text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-lg">Expenses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-white  rounded-xl">
        <div className=" h-[80px] flex items-center justify-between p-6 border-b">
          <h1 className="font-semibold text-base">Revenue Overview</h1>
          <div className="flex gap-3 items-center">
            <Link href="#" className="p-2 border rounded-full">
              <BiScan />
            </Link>
            <div className="border rounded-full py-2 px-2 text-sm">
              {today} - {today}
            </div>
          </div>
        </div>
        <div className="p-6 h-[400px]"></div>
      </div>
    </div>
  );
}
