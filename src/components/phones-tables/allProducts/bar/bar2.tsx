import { Fugaz_One } from "next/font/google";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import BrandsMenu from "./brand/brand";
import PriceRange2 from "./PriceRange/price";

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function BarTop2() {
  return (
    <div className="px-4 py-2 flex flex-wrap items-center gap-3 bg-white ">
      {/* --- Express Tag --- */}
      <Link
        href="#"
        className={`flex items-center justify-center px-3 h-[33px] bg-slate-300 text-red-500 rounded-lg text-sm uppercase tracking-wide ${fugazOne.className}`}
      >
        <FaPaperPlane className="text-xs mr-2" />
        Express
      </Link>

      {/* --- Shipped from Nigeria Tag --- */}
      <div className="flex items-center justify-center px-3 h-[33px] bg-slate-300 text-gray-700 text-sm rounded-lg">
        Shipped from Nigeria
      </div>
      <div className="flex items-center">
        <BrandsMenu />
      </div>
      <div className="flex items-center">
        <PriceRange2 />
      </div>
    </div>
  );
}
