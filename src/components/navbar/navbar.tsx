"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Poppins } from "next/font/google";
import SupportMenu from "@/app/(main)/Navbar/SupportMenu/supportMenuItems";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/src/utils/cart";
import AccountMenu from "@/app/(main)/Navbar/AccountMenu/accountMenuItems";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useUserRole } from "../admin/auth/userRole";

const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const { role, loading } = useUserRole();
  return (
    <div className="w-full bg-white h-[80px] shadow-lg ">
      <div className="flex justify-between items-center  h-full  mx-10">
        <Link href="/" className="">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={150}
            height={60}
            priority={true}
          />
        </Link>
        <form className="flex ml-4">
          <div className="flex border w-[550px] h-[40px] p-1 rounded-md">
            <IoMdSearch className="text-3xl flex justify-center items-center" />
            <input
              type="text"
              className="w-full h-full outline-none pl-3"
              placeholder=" Search Products, brands and Categories"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 w-[80] h-[40px] text-white text-center font-medium ml-2 rounded-md  hover:bg-red-600"
          >
            Search
          </button>
        </form>

        <ul className="flex justify-center gap-5 font-[500] text-[16px] items-center">
          <li>
            <AccountMenu />
          </li>
          <li>
            <SupportMenu />
          </li>

          <li className="hover:text-red-500 cursor-pointer">
            <Link href="/cart" className="flex gap-[6px]">
              <div className="relative">
                <MdOutlineShoppingCart className="text-2xl flex justify-center items-center" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white text-xs z-50  ">
                    {totalQuantity}
                  </span>
                )}
              </div>

              <span>Cart</span>
            </Link>
          </li>

          {!loading && role === "admin" && (
            <li className="hover:text-red-500 cursor-pointer">
              <Link
                href="/adminLogin"
                className="flex justify-center items-center"
              >
                <div className="relative">
                  <MdOutlineAdminPanelSettings className="text-xl flex justify-center items-center" />
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
