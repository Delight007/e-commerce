import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <div className="w-full h-[170px]">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Official Store
      </h2>
      <div className="w-full h-[120px] bg-white rounded-b-md grid grid-cols-6 py-1 px-2">
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/hisense.png"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/ecoflow.jpg"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/nexus.png"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/haier-thermocool.png"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/binatone.png"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="#">
            <Image
              src="/images/ROYAL.jpg"
              alt="hisense"
              width={180}
              height={96}
              className="group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
