import Link from "next/link";
import React from "react";
import { FaArtstation } from "react-icons/fa";

export default function Promotion() {
  return (
    <div className="py-2">
      <h2 className="text-md font-medium uppercase">Promotions</h2>
      <div className="text-sm flex flex-col gap-3 py-4">
        <div>
          <Link href="#" className=" text-blue-500 hover:underline flex gap-1">
            <FaArtstation className="text-red-400 text-lg" />{" "}
            <span>Call 07006000000 To Place Your Order</span>
          </Link>
        </div>
        <div>
          <Link href="#" className=" text-blue-500 hover:underline flex gap-1">
            <FaArtstation className="text-red-400 text-lg" />
            <span>
              Need extra money? Loan up to N500,000 on the JumiaPay Android app.
            </span>
          </Link>
        </div>
        <div>
          <Link href="#" className=" text-blue-500 hover:underline flex gap-1">
            <FaArtstation className="text-red-400 text-lg" />
            <span>
              Enjoy cheaper shipping fees when you select a PickUp Station at
              checkout.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
