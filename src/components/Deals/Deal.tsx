import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Deals() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className=" w-full h-full grid grid-cols-6 gap-2 py-1 px-2">
      <div className="group relative p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#" className="flex flex-col">
          <span>
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
            )}
            <Image
              width={170}
              height={168}
              src="/images/electronics.png"
              alt="electronics"
              priority={true}
              className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </span>
          <p className="text-sm w-full h-[50px] p-3 ">Tv & Audio Deals</p>
        </Link>
      </div>
      <div className="group p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#">
          {imageLoading && (
            <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
          )}
          <Image
            width={170}
            height={168}
            src="/images/7.gif"
            alt="gif1"
            priority={true}
            className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <p className="text-sm p-3">New Arrival</p>
        </Link>
      </div>
      <div className="group p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#">
          <Image
            width={170}
            height={168}
            src="/images/clearance.png"
            alt="clearance"
            priority={true}
            className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <p className="text-sm p-3">Up to 80% off</p>
        </Link>
      </div>
      <div className="group p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#">
          <Image
            width={170}
            height={168}
            src="/images/phones.png"
            alt="phones"
            priority={true}
            className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <p className="text-sm px-1 py-3">Phone & Tablets Deals</p>
        </Link>
      </div>
      <div className="group p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#">
          <Image
            width={170}
            height={168}
            src="/images/appliances.png"
            alt="appliances"
            priority={true}
            className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <p className="text-sm p-3">Appliances Deals</p>
        </Link>
      </div>
      <div className="group p-2 rounded-md text-center w-[180px] h-[220px]  hover:shadow-lg">
        <Link href="#">
          <Image
            width={170}
            height={168}
            src="/images/fashion.png"
            alt="fashion"
            priority={true}
            className={`rounded  group-hover:w-[168px] group-hover:h-[170px] transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <p className="text-sm p-3">Fashion Deals</p>
        </Link>
      </div>
    </div>
  );
}
