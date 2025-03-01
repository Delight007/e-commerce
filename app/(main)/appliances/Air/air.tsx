import Image from "next/image";
import Link from "next/link";

export default function AirService() {
  return (
    <div className="w-full h-[311px]">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Heating, Cooling & Air Quality
      </h2>
      <div className="w-full h-[261px] bg-white rounded-b-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1 ">
          <Link href="#">
            <Image
              src="/images/vacuum-cleaners.png"
              alt="vacuum cleanup"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/air-purifiers.png"
              alt="air-purifiers"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/dehumidifiers.png"
              alt="dehumidifiers"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/fans.png"
              alt="fans"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/humidifiers.png"
              alt="humidifiers"
              width={180}
              height={245}
              className="group-hover:scale-[1.02] rounded-md"
            />
          </Link>
        </div>
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <Image
              src="/images/water-heaters.png"
              alt="heaters"
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
