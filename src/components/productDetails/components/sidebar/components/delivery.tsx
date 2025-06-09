import React from "react";
import { LiaGiftSolid } from "react-icons/lia";
import { LiaHandsSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { BsArrowCounterclockwise } from "react-icons/bs";
export default function Delivery() {
  return (
    <section>
      <article className="flex py-1">
        {/* Icon */}
        <div className="border p-2 h-[40px]  relative ">
          <LiaGiftSolid className=" z-100 text-lg absolute top-0 right-[11px] mt-[2px]" />
          <LiaHandsSolid className="text-2xl z-10 mt-[2px]" />
        </div>
        <div className="flex-1 ml-2 ">
          <div className="flex ">
            <h2 className="font-medium text-base">Pickup Station</h2>
            <button className="text-blue-500 hover:underline text-sm ml-[70px]">
              Details
            </button>
          </div>
          <p className=" text-[12px] pt-1">Delivery Fees ₦ 1,710</p>
          <p className="text-[12px] leading-4 pt-1">
            Ready for delivery between 12 June and 16 June if you place your
            order within the next 3hrs 21mins
          </p>
        </div>
      </article>
      <article className="flex py-1">
        {/* Icon */}
        <div className="border p-2 h-[40px]  relative ">
          <TbTruckDelivery className="text-2xl" />
        </div>
        {/* Text */}
        <div className="flex-1 ml-2 ">
          <div className="flex ">
            <h2 className="font-medium text-base">Pickup Station</h2>
            <button className="text-blue-500 hover:underline text-sm ml-[70px]">
              Details
            </button>
          </div>
          <p className=" text-[12px] pt-1">Delivery Fees ₦ 1,710</p>
          <p className="text-[12px] pt-1 leading-tight">
            Ready for delivery between 12 June and 16 June if you place your
            order within the next 3hrs 21mins
          </p>
        </div>
      </article>
      <article className="flex py-1">
        {/* Icon */}
        <div className="border p-2 h-[40px]  relative ">
          <BsArrowCounterclockwise className="text-2xl" />
        </div>
        {/* Text */}
        <div className="flex-1 ml-2 ">
          <div className="flex ">
            <h2 className="font-medium text-base">Return Policy</h2>
          </div>

          <p className="text-[12px] pt-1 leading-tight">
            Free return within 7 days for ALL eligible items
            <span className="text-blue-500 hover:underline ml-2">Details</span>
          </p>
        </div>
      </article>
    </section>
  );
}
