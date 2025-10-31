"use client";
import { useUserRole } from "@/src/components/admin/auth/userRole";
import MenuPopover from "@/src/components/ui/popOver";
import { useCartStore } from "@/src/utils/cart";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineShoppingCart,
} from "react-icons/md";
import AccountMenu from "./AccountMenu/accountMenuItems";
import SupportMenu from "./SupportMenu/supportMenuItems";

const poppins = Poppins({ weight: "600", subsets: ["latin"], display: "swap" });

export default function NavMenu() {
  const items = useCartStore((state) => state.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const { role, loading } = useUserRole();

  return (
    <div className="w-full bg-white h-auto sm:h-[80px]  shadow-lg ">
      <div className="w-full sm:hidden flex mb-1 ">
        <form className="w-full mx-4 flex pt-2">
          <div className="flex border flex-1 h-[40px] p-1 rounded-full items-center">
            <IoMdSearch className="lg:text-3xl text-xl flex justify-center items-center" />
            <input
              type="text"
              className="w-full h-full outline-none pl:2 lg:pl-3 text-sm lg:text-base"
              placeholder=" Search Products, brands and Categories"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 w-10 h-[34px]  text-white text-center  font-medium ml-2 rounded-full hover:bg-red-600 flex justify-center items-center"
          >
            <BiSearch className="w-6 h-6" />
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center  h-full  mx-auto px-6 lg:px-12 max-w-7xl ">
        <MenuPopover />
        <Link href="/" className="">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={100}
            height={60}
            priority={true}
            className="w-[100px] h-[40px] sm:w-[120px] md:w-[150px]"
          />
        </Link>

        <form className="ml-4 hidden sm:flex">
          <div className="flex border w-[200px] lg:w-[550px] h-[40px] p-1 rounded-md items-center">
            <IoMdSearch className="lg:text-3xl text-xl flex justify-center items-center" />
            <input
              type="text"
              className="w-full h-full outline-none pl:2 lg:pl-3 text-sm lg:text-base"
              placeholder=" Search Products, brands and Categories"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 w-16 h-[34px] lg:w-28 lg:h-[40px] text-white text-center text-sm lg:text-base font-medium ml-2 rounded-md  hover:bg-red-600"
          >
            Search
          </button>
        </form>

        <ul className="flex justify-center gap-5 font-[500] text-[16px] items-center">
          <li>
            <AccountMenu />
          </li>
          <li className="hidden sm:flex">
            <SupportMenu />
          </li>

          <li className=" hover:text-red-500 cursor-pointer">
            <Link href="/cart" className="flex gap-2 ">
              <div className="relative">
                <MdOutlineShoppingCart className="text-2xl flex justify-center items-center" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-500 text-white text-xs z-50 ">
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
