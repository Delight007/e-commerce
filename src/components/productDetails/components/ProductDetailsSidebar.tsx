import Link from "next/link";
import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

export default function ProductDetailsSidebar() {
  return (
    <div className="w-[296px] h-auto  flex flex-col bg-white text-sm">
      <Link href="" className="py-3 px-4 flex gap-4 items-center">
        <FaRegFileLines className="text-2xl" />
        Product details
      </Link>
      <Link href="" className="py-3 px-4 flex gap-4 items-center">
        <IoListSharp className="text-2xl" />
        Specification
      </Link>
      <Link href="" className="py-3 px-4 flex gap-4 items-center">
        <RiFeedbackLine className="text-2xl" />
        Verified Customer Feedback
      </Link>
    </div>
  );
}
