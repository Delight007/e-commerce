"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Shop By Category
      </h2>
      <div className="w-full h-[270px] bg-white rounded-b-md grid grid-cols-6 gap-1 py-1 px-2">
        <div className="group  flex justify-center items-center ">
          <Link href="/appliances/air-conditioners">
            <div className="relative w-[180px] h-[250px]  group-hover:scale-103 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Air-con.png"
                alt="airCon"
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
        <div className="group   flex justify-center items-center">
          <Link href="/appliances/food-processor">
            <div className="relative w-[180px] h-[250px] group-hover:scale-103">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Food_Processor.png"
                alt="Food_Processor"
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
        <div className="group  flex justify-center items-center">
          <Link href="/appliances/fridges-freezers">
            <div className="relative w-[180px] h-[250px] group-hover:scale-103 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Fridges.png"
                alt="Fridges"
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
        <div className="group flex justify-center items-center">
          <Link href="/appliances/microwaves">
            <div className="relative w-[180px] h-[250px] group-hover:scale-103 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Micro-Wave.png"
                alt="Micro-Wave"
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
        <div className="group  flex justify-center items-center ">
          <Link href="/electronics">
            <div className="relative w-[180px] h-[250px] group-hover:scale-103 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Television.png"
                alt="Television"
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
        <div className="group    flex justify-center items-center">
          <Link href="/appliances/washers-dryers">
            <div className="relative w-[180px] h-[250px]  group-hover:scale-103 ">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/Washing-Machine.png"
                alt="Washing-Machine"
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
