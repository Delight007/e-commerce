"use client";

import { useAuth } from "@/src/components/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { BiScan } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const languages = [
  { code: "en", label: "🇺🇸 " },
  { code: "fr", label: "🇫🇷 " },
  { code: "es", label: "🇪🇸 " },
  { code: "de", label: "🇩🇪 " },
];

export default function RightBar() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [userPopoverOpen, setUserPopoverOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="flex gap-3 items-center">
      {/* Language Selector */}
      <div className="relative ml-4 group">
        <button className="border border-red-500 text-red-500 px-3 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-100">
          {selectedLang.label}
        </button>

        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-md z-10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLang(lang)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Apps */}
      <div className="border-gray-300 px-2 py-2 rounded-full hover:bg-gray-100">
        <RxDashboard className="text-xl text-red-500" />
      </div>
      <div className="border-gray-300 px-2 py-2 rounded-full hover:bg-gray-100">
        <BiScan className="text-xl text-red-500" />
      </div>
      <div className="border-gray-300 px-2 py-2 rounded-full hover:bg-gray-100">
        <RiNotification2Line className="text-xl text-red-500" />
      </div>
      <div className="border-gray-300 px-2 py-2 rounded-full hover:bg-gray-100">
        <MdOutlineDarkMode className="text-xl text-red-500" />
      </div>

      {/* User Profile Popover */}
      <div
        className="relative"
        onMouseEnter={() => setUserPopoverOpen(true)}
        onMouseLeave={() => setUserPopoverOpen(false)}
      >
        <div className="border-gray-300 px-2 py-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <FaRegUserCircle className="text-xl text-red-500" />
        </div>

        {userPopoverOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 border border-gray-200">
            <div className="px-4 py-3 border-b ">
              <p className="font-semibold">{user?.displayName}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                Settings
              </li>
            </ul>
            <div className="px-4 py-4 hover:bg-gray-100 cursor-pointer text-red-500 border-t flex justify-center items-center">
              <Link href="/adminLogin" className="font-semibold">
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
