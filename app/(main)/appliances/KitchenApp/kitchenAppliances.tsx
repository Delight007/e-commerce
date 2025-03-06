import Image from "next/image";
import Link from "next/link";

export default function KitchenAppliances() {
  return (
    <div className="w-full h-[311px]">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Kitchen Appliances
      </h2>
      <div className="w-full h-[261px] bg-white rounded-b-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1 ">
          <Link href="#">
            <Image
              src="/images/Blenders.png"
              alt="blenders"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/dishwashers.png"
              alt="dishwashers"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/juicers.png"
              alt="juicers"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/kettles.png"
              alt="kettles"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/mixers.png"
              alt="mixer"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/range-hoods.png"
              alt="range-hoods"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
