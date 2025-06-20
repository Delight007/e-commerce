"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { Poppins } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/src/utils/cart";

const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });

export default function CheckoutNavbar() {
  const items = useCartStore((state) => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="w-full bg-white h-[80px] shadow-lg ">
      <div className="flex justify-between items-center  h-full  mx-10">
        <Link href="/" className="">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={145}
            height={50}
            priority={true}
          />
        </Link>
        <div className="flex gap-9 text-gray-500 font-semibold">
          <div className="flex gap-2  justify-center items-center ">
            <MdOutlinePermPhoneMsg className="text-2xl " />
            <div className="flex flex-col">
              <span className="text-[12px]">Need Help?</span>
              <span className="text-[12px] text-blue-500 hover:underline">
                Contact us
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <GiReturnArrow className="text-xl" />
            <div className="flex flex-col">
              <span className="text-[12px]">Easy </span>
              <span className="text-[12px]">Return</span>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <RiShieldStarFill className="text-xl" />
            <div className="flex flex-col">
              <span className="text-[12px]">Secure </span>
              <span className="text-[12px]">Payment </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
