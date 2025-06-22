import { Fugaz_One } from "next/font/google";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import PriceRange from "../../../allProducts/mProduct/bar/PriceRange/priceRange";
import KettleBrandsMenu from "../kettleBrand";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function KettleBar2() {
  return (
    <div className="px-[16px] flex  gap-2 relative ">
      <div
        className={` w-[100px] h-[33px] flex justify-center items-center  bg-slate-300 text-red-500 rounded-lg ${fugazOne.className}`}
      >
        <Link href="#" className="flex justify-center items-center  font-[400]">
          <FaPaperPlane className="text-sm mr-2" />
          <span className="uppercase text-[12px]">Express</span>
        </Link>
      </div>
      <div>
        <span className=" w-[148px] h-[33px] flex justify-center items-center py-3 bg-slate-300 text-sm rounded-lg">
          Shipped from Nigeria
        </span>
      </div>

      <div>
        <KettleBrandsMenu />
      </div>

      <div>
        <PriceRange />
      </div>
    </div>
  );
}
