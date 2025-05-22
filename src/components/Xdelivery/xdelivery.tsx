import CheckboxLabels from "@/src/components/ui/checkBox";
import NoticeI from "@/src/components/ui/noticeI";
import React from "react";

export default function Xdelivery() {
  return (
    <div>
      <div className="px-2 py-2">
        <h2 className="uppercase font-semibold text-[13px] ">
          Express Delivery
        </h2>
      </div>
      <div className="flex  items-center px-2 py-1">
        <CheckboxLabels />
        <NoticeI />
      </div>
    </div>
  );
}
