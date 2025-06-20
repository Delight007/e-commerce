"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category1() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[261px] bg-white rounded-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group flex justify-center items-center my-1 ">
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/ANDROID-PHONES.jpg"
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
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/TABLETS.jpg"
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
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/IPHONES.jpg"
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
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/RENEWED.jpg"
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
          <Link href="#">
            <div className="relative w-[180px] h-[245px]  group-hover:scale-102 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/IPADS.jpg"
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
                src="/images/CELLPHONES.jpg"
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
