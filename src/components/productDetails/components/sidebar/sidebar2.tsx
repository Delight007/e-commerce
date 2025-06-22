import NoticeUi from "@/src/components/ui/noticeUi";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
export default function Sidebar2() {
  return (
    <div className=" bg-white w-full h-[290px] rounded-md">
      <div className="flex p-2 border-b">
        <h2 className="uppercase font-medium text-sm ">seller information</h2>
        <MdArrowForwardIos className="ml-[105px] pt-1 font-medium" />
      </div>
      {/* Seller Performance */}
      <div className="p-2">
        <div className="flex">
          <h2 className=" font-medium text-sm">Seller Performance</h2>
          <NoticeUi />
        </div>
        <p className="text-[12px] mt-2">
          Shipping: <span className="font-medium">Excellent</span>
        </p>
        <p className="text-[12px] mt-2">
          Quality Score: <span className="font-medium"> Good</span>
        </p>
        <p className="text-[12px] mt-2">
          Customer Rating: <span className="font-medium"> Good</span>
        </p>
      </div>
    </div>
  );
}
