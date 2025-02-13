import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Poppins } from "next/font/google";
import AccountMenu from "./AccountMenu/accountMenuItems";
import SupportMenu from "./SupportMenu/supportMenuItems";

const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });

export default function navbar() {
  return (
    <div className="w-full bg-white h-[76px] shadow-sm  ">
      <div className="flex justify-between items-center  h-full  ">
        <h1 className={`text-3xl ml-10 ${poppins.className}`}>gaNa</h1>

        <form className="flex ml-4">
          <div className="flex border w-[450px] h-[40px] p-1 rounded-md">
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

          <li className="flex gap-2 mr-10  hover:text-red-500 cursor-pointer">
            <MdOutlineShoppingCart className="text-2xl flex justify-center items-center" />
            <span>Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
