// "use client";
import Link from "next/link";
import { FaHouseDamage } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImDropbox } from "react-icons/im";

export default function MoreDetailst() {
  return (
    <div className="flex flex-row lg:flex-col  gap-4">
      <div className=" flex flex-col w-full h-[180px] bg-white rounded-md text-black pl-3">
        <Link
          href="#"
          className="w-full h-[60px] uppercase flex items-center gap-3 py-5"
        >
          <div>
            <FaPhone className="text-xl" />
          </div>
          <div>
            <span className="flex flex-col">
              <span className="text-sm font-semibold">Call to Order</span>
              <span className="text-gray-500 text-[12px]">
                0700-667-000, 0899...
              </span>
            </span>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full h-[60px] capitalize flex items-center gap-3 "
        >
          <div>
            <FaHouseDamage className="text-xl" />
          </div>
          <div>
            <span className="text-sm font-semibold">Sell on G</span>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full h-[60px] capitalize flex items-center  gap-3"
        >
          <div>
            <ImDropbox className="text-xl" />
          </div>
          <div>
            <span className="text-sm font-semibold"> Best deals</span>
          </div>
        </Link>
      </div>
      <div className="bg-black w-full h-[180px] rounded-md">
        <span className=" text-white text-[30px]"></span>
      </div>
    </div>
  );
}
