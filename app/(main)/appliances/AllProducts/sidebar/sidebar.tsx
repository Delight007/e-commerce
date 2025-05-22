import CheckboxLabels from "@/src/components/ui/checkBox";
import NoticeI from "@/src/components/ui/noticeI";

import Brand from "./Brand/brand";
import Range from "../../../../../src/components/priceRange/range";
import Rating from "@/src/components/productRating/rating";
import SellerScore from "@/src/components/sellerScore/score";
import OfficialStore from "@/src/components/officialStore/officialStore";
import Discount from "@/src/components/discount/discount";
import Shipped from "@/src/components/shipped/shipped";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";

export default function Siderbar() {
  return (
    <div>
      <div className="w-[285px]  rounded-md  bg-white">
        {/* XDdelivery */}
        <div className="w-full  border-b px-2 pt-1">
          <Xdelivery />
        </div>

        {/* Shipped */}
        <div className="w-full  border-b px-2 pt-1">
          <div className="px-2 py-1">
            <Shipped />
          </div>
        </div>

        {/* Brand */}
        <div className="w-full h-[280px] border-b px-2 pt-1 ">
          <div className="px-2 py-1">
            <Brand />
          </div>
        </div>

        {/* Price range */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Range />
          </div>
        </div>

        {/* Rating */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Rating />
          </div>
        </div>

        {/* seller score */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <SellerScore />
          </div>
        </div>

        {/* official store */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <OfficialStore />
          </div>
        </div>

        {/* discount */}
        <div className="w-full  border-b px-2 py-1 ">
          <div className=" px-2 py-1">
            <Discount />
          </div>
        </div>
      </div>
    </div>
  );
}
