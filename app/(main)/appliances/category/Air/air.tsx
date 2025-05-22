"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AirService() {
  const [imageLoading, setImageLoading] = React.useState(false);
  return (
    <div className="w-full h-[311px]">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Heating, Cooling & Air Quality
      </h2>
      <div className="w-full h-[261px] bg-white rounded-b-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group flex justify-center items-center mt-1 ">
          <Link href="/appliances/vacuum-cleaners">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/vacuum-cleaners.png"
                alt="vacuum-cleaners"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
        <div className="group   flex justify-center items-center mt-1">
          <Link href="/appliances/air-purifiers">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/air-purifiers.png"
                alt="air-purifiers"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
        <div className="group flex justify-center items-center mt-1">
          <Link href="/appliances/dehumidifiers-accessories">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/dehumidifiers.png"
                alt="dehumidifiers"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
        <div className="group   flex justify-center items-center mt-1">
          <Link href="/appliances/fans">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/fans.png"
                alt="fans"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
        <div className="group flex justify-center items-center mt-1">
          <Link href="/appliances/humidifiers">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/humidifiers.png"
                alt="humidifiers"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
        <div className="group flex justify-center items-center mt-1">
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}

              <Image
                src="/images/water-heaters.png"
                alt="water-heaters"
                fill
                sizes="180px"
                priority={true}
                className={` rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                } `}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
