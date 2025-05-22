"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KitchenAppliances() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full h-[311px]">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Kitchen Appliances
      </h2>
      <div className="w-full h-[261px] bg-white rounded-b-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group flex justify-center items-center mt-1 ">
          <Link href="/appliances/blenders">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Blenders.png"
                alt="Blenders"
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
          <Link href="/appliances/dish-washers">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/dishwashers.png"
                alt="dishwashers"
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
          <Link href="/appliances/juicers">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/juicers.png"
                alt="juicers"
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
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="/appliances/kettles">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/kettles.png"
                alt="kettles"
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
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="/appliances/mixers">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/mixers.png"
                alt="mixers"
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
        <div className="group w-[180px] h-[245px] bg-white rounded-md  flex justify-center items-center mt-1">
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/range-hoods.png"
                alt="range-hoods"
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
