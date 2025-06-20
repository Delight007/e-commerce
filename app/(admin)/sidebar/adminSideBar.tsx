"use client";
import React, { useState } from "react";
import { BsSpeedometer } from "react-icons/bs";
import { HiOutlineChatAlt } from "react-icons/hi";
import { RiArrowRightSLine, RiArrowUpSLine, RiTodoLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiAuthelia } from "react-icons/si";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { GrDocumentPerformance } from "react-icons/gr";
import { GrAnalytics } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function AdminSideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrop = () => setIsOpen((prev) => !prev);
  return (
    <div className="">
      <div className="w-[250px] h-[70px] bg-red-700 fixed z-10 font-blackOps flex justify-center items-center">
        <Link href="/" className="">
          <Image
            src="/images/logo4.png"
            alt="logo"
            width={150}
            height={70}
            priority={true}
          />
        </Link>
      </div>
      <div className="bg-white w-[250px] h-[100vh] font-roboto overflow-y-auto  sidebar-scrollbar px-2 fixed top-[70px]">
        <div className="w-full px-4 py-3 ">
          <div className=" border-b border-slate-300 flex items-center w-full h-[70px]">
            <Link
              href="/dashboard"
              className="flex gap-3 items-center text-black font-bold "
            >
              <BsSpeedometer className="text-red-500" />
              Dashboard
            </Link>
          </div>
          {/* apps */}
          <div className="py-3 border-b  border-slate-300 ">
            <h1 className="uppercase py-[10px] text-sm font-bold text-red-500">
              Apps
            </h1>
            <div>
              <div>
                <div
                  className="flex gap-3  w-full py-[10px] h-[48px] items-center px-2 text-black font-medium cursor-pointer hover:bg-gray-200 "
                  onClick={toggleDrop}
                >
                  <MdOutlineShoppingCart className="font-bold text-xl text-red-500" />
                  <span> eCommerce</span>
                  {isOpen ? (
                    <RiArrowRightSLine className="font-extrabold text-xl text-red-500" />
                  ) : (
                    <RiArrowDownSLine className="font-extrabold text-xl text-red-500" />
                  )}
                </div>
                {/* dropsown menu */}
                {isOpen && (
                  <div className=" flex flex-col  items-center gap-2 text-sm text-gray-700">
                    <Link
                      href="/productList"
                      className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2"
                    >
                      <FaRegCircle className="text-sm" />
                      Product List
                    </Link>
                    <div className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2">
                      <Link
                        href="/upload"
                        className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2"
                      >
                        <FaRegCircle className="text-sm" />
                        Add Product
                      </Link>
                    </div>
                    <div className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2">
                      <FaRegCircle className="text-sm" />
                      Add Category
                    </div>
                    <div className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2">
                      <FaRegCircle className="text-sm" />
                      Add Sub Category
                    </div>
                    <div className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2">
                      <Link
                        href="/order_list"
                        className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px] flex items-center gap-2"
                      >
                        <FaRegCircle className="text-sm" />
                        Order List
                      </Link>
                    </div>
                    <div className="cursor-pointer hover:text-red-500 py-2 w-full h-[48px]">
                      Vendor
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* pages */}
          {/* <div className="py-3 border-b  border-slate-300">
            <h1 className="uppercase py-[10px] text-sm font-bold text-red-500">
              Pages
            </h1>
            <div>
              <div className="flex gap-3 w-full py-[10px] h-[48px] items-center px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
                <SiAuthelia className="font-black text-xl text-red-500" />
                Authentication
              </div>
              <div></div>
            </div>
          </div> */}
          {/* User Management */}
          <div className="py-3 border-b  border-slate-300">
            <h1 className="uppercase py-[10px] text-sm font-bold text-red-500">
              User Management
            </h1>
            <div className="flex gap-3 w-full py-[10px] h-[48px] items-center px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
              <PiUsersThreeBold className="font-black text-xl" /> Customers
            </div>
            <div className="flex gap-3 w-full py-[10px] h-[48px] items-center px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
              <MdOutlineAdminPanelSettings className="font-black text-xl text-red-500" />
              Admin Users
            </div>
          </div>
          {/* Reports */}
          <div className="py-3 mb-10">
            <h1 className="uppercase py-[10px] text-sm font-bold text-red-500">
              Reports
            </h1>
            <div className="flex gap-3 w-full py-[10px] h-[48px] items-center text-sm px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
              <TbReport className="font-black text-xl text-red-500" />
              Sales Reports
            </div>
            <div className="flex gap-3 w-full py-[10px] h-[48px] items-center text-sm px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
              <GrDocumentPerformance className="font-black text-xl text-red-500" />
              Product Performance
            </div>
            <div className="flex gap-3 w-full py-[10px] h-[48px] items-center text-sm px-2 text-black font-medium cursor-pointer hover:bg-gray-200">
              <GrAnalytics className="font-black text-xl text-red-500" />
              Customer Analytics
            </div>
            {/* <div className="flex gap-3 w-full py-[10px] h-[48px] items-center text-sm text-black font-medium cursor-pointer hover:bg-gray-200"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
