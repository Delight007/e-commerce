import Discount from "@/src/components/discount/discount";
import OfficialStore from "@/src/components/officialStore/officialStore";
import Rating from "@/src/components/productRating/rating";
import SellerScore from "@/src/components/sellerScore/score";
import Shipped from "@/src/components/shipped/shipped";
import Xdelivery from "@/src/components/Xdelivery/xdelivery";
import Range from "../../../../../src/components/priceRange/range";
import Brand from "./brand/phoneBrand";

export default function PhonesSideBar() {
  return (
    <div>
      <div className="lg:w-[285px] w-auto rounded-md  bg-white">
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
