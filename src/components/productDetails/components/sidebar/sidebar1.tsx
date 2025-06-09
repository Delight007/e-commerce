import NoticeI from "@/src/components/ui/noticeI";
import React from "react";
import { Fugaz_One } from "next/font/google";
import Location from "./components/location";
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Sidebar1() {
  return (
    <div className=" bg-white w-full h-auto rounded-md flex flex-col">
      <div className="border-b ">
        <h2 className="font-medium uppercase text-sm text-start p-2">
          Delivery & Returns
        </h2>
      </div>
      <div className="border-b">
        <div className="p-2">
          <span className={`${fugazOne.className} text-[12px] font-bold`}>
            gana
          </span>
          <span
            className={`${fugazOne.className} text-red-500 font-semibold text-[10px] uppercase`}
          >
            Express
          </span>
          <p className="text-[12px] text-gray-500 leading-tight">
            The BEST products, delivered faster. Now PAY on DELIVERY, Cash or
            Bank Transfer Anywhere, Zero Wahala!{" "}
            <span className="text-blue-500 hover:underline  cursor-pointer">
              Details
            </span>
          </p>
        </div>
      </div>
      <div className="p-2">
        <Location />
      </div>
    </div>
  );
}
