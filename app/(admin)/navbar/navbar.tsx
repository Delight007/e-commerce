"use client";
import React from "react";
import { FiSearch } from "react-icons/fi";
import RightBar from "./rightBar";

export default function AdminNavbar() {
  return (
    <div className="h-[70px] bg-white flex justify-between items-center px-4 shadow-sm fixed left-[250px] right-0 top-0 z-10">
      {/* search bar */}
      <div className="relative w-full max-w-[300px] h-[40px]">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full pr-10 pl-4  border border-red-500 rounded-full focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <FiSearch size={20} />
        </button>
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
}
