"use client";
import OrderTable from "@/src/components/admin/orderTable";
import Link from "next/link";
import React, { useState } from "react";
import { BiScan } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import { RiEqualizerLine } from "react-icons/ri";

export default function page() {
  const options = ["10", "20", "30", "40", "50", "100", "200", "All"];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRowsPerPageChange = (value: string) => {
    if (value.toLowerCase() === "10") {
      setRowsPerPage(Number.MAX_SAFE_INTEGER);
    } else {
      setRowsPerPage(parseInt(value, 10));
    }
  };
  return (
    <div className=" relative px-4 top-[80px]">
      <div className="py-3 flex justify-between items-center">
        <h1 className="font-semibold text-xl">Order List</h1>
        <div className="flex items-center gap-2 justify-center text-[14px] font-semibold text-gray-400">
          <Link href="/dashboard">Gana</Link> <MdArrowRight />
          <p>Order List</p>
        </div>
      </div>
      <div className="mt-3 bg-white rounded-xl">
        <div className="flex justify-between items-center border-b h-[80px] px-6">
          <h2 className="font-semibold text-lg text-[16px]">Recent Orders</h2>
          <div className="flex gap-3 items-center">
            <span className="p-2 border rounded-full">
              <BiScan />
            </span>
            <span className="p-2 border rounded-full">
              <RiEqualizerLine />
            </span>
          </div>
        </div>
        <div className="p-6">
          {/*  */}
          <div className="flex justify-between items-center ">
            <div>
              <select
                onChange={(e) => handleRowsPerPageChange(e.target.value)}
                className="border border-gray-300 px-2 py-1 text-sm text-gray-300 outline-none rounded-full"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-[200px] h-[40px]">
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pr-10 pl-4 text-[12px] border border-gray-300 rounded-full focus:outline-none"
              />
            </div>
          </div>
          {/*order table */}
          <div>
            <OrderTable
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={setRowsPerPage}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] bg-white mt-3 flex justify-center items-center">
        <p className="font-semibold">
          2025 © <span className="font-blackOps">Gana</span>, All rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
