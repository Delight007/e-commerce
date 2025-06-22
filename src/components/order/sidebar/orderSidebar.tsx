"use client";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
// import { SvgIcon } from "@mui/material";
import SVGComponent from "../../icon/voucherIcon";
import { GiBackwardTime } from "react-icons/gi";
import { usePathname } from "next/navigation";

export default function OrderSidebar() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col bg-white w-[285px] rounded-md">
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px] hover:bg-gray-200 rounded-t-md ${
          pathName === "/account" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <FaRegUser className="text-xl" /> My Account
      </Link>
      <Link
        href="/order"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/order" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <LuInbox className="text-xl" />
        Orders
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/inbox" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <MdOutlineMailOutline className="text-xl" />
        Inbox
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]  ${
          pathName === "/reviews" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <MdOutlineRateReview className="text-xl" />
        Pending Reviews
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]  ${
          pathName === "/voucher" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <SVGComponent width={20} height={20} />
        Voucher
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/wishlist" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        <FaRegHeart className="text-xl" />
        Whishlist
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/recently-viewed"
            ? "bg-gray-200 "
            : "hover:bg-gray-200 "
        }`}
      >
        <GiBackwardTime className="text-2xl" />
        Recently Viewed
      </Link>

      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/account-management"
            ? "bg-gray-200 "
            : "hover:bg-gray-200 "
        }`}
      >
        Account Management
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]   ${
          pathName === "/payment-setting"
            ? "bg-gray-200 "
            : "hover:bg-gray-200 "
        }`}
      >
        Payment Setting
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px]  ${
          pathName === "/address" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        Address Book
      </Link>
      <Link
        href="#"
        className={`flex items-center gap-4 py-3 px-3 w-full  text-[14px] rounded-b-md  ${
          pathName === "/preferences" ? "bg-gray-200 " : "hover:bg-gray-200 "
        }`}
      >
        Newsletter Preferences
      </Link>
    </div>
  );
}
