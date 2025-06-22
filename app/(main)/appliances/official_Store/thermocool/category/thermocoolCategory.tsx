"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ThermocoolCategory() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full  bg-white rounded-md">
      <div className="grid grid-cols-6 py-2 px-2">
        <div className="group w-[190px] h-full bg-white rounded-md   flex justify-center items-center hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] ">
          <Link href="/appliances/official_Store/hisense">
            <div className="group-hover:scale-102">
              <div className="relative w-[180px] h-[102px] ">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/ther-Airconditioner.png"
                  alt="AC"
                  fill
                  sizes="180px"
                  style={{ objectFit: "contain" }}
                  priority={true}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center pb-1">
                <span className="text-sm">Air Conditioners</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
          <Link href="/appliances/official_Store/ecoflow">
            <div className="group-hover:scale-102">
              <div className="relative w-[180px] h-[102px] ">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/ther-Generator.png"
                  alt="generator"
                  fill
                  sizes="180px"
                  priority={true}
                  style={{ objectFit: "contain" }}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center capitalize pb-1">
                <span className="text-sm">Generators</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
          <Link href="/appliances/official_Store/nexus">
            <div className=" group-hover:scale-102">
              <div className="relative w-[180px] h-[102px]">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/ther-Refrigerator_freelink.png"
                  alt="fridges"
                  fill
                  sizes="180px"
                  priority={true}
                  style={{ objectFit: "contain" }}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center capitalize pb-1">
                <span className="text-sm">Fridges</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
          <Link href="/appliances/official_Store/thermocool">
            <div className="group-hover:scale-102">
              <div className="relative w-[180px] h-[102px] ">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/ther-Washing_machine.png"
                  alt="washers"
                  fill
                  sizes="180px"
                  priority={true}
                  style={{ objectFit: "contain" }}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center pb-1">
                <span className="text-sm">Washing Machine</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
          <Link href="/appliances/official_Store/binatone">
            <div className="group-hover:scale-102">
              <div className="relative w-[180px] h-[102px] ">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/ther-freezers.png"
                  alt="freezers"
                  fill
                  sizes="180px"
                  priority={true}
                  style={{ objectFit: "contain" }}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center  capitalize pb-1">
                <span className="text-sm">freezers</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
          <Link href="/appliances/official_Store/royal">
            <div className="group-hover:scale-102 ">
              <div className="relative w-[180px] h-[102px] ">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <Image
                  src="/images/Nexus-microwave.jpg"
                  alt="microwaves"
                  fill
                  sizes="180px"
                  priority={true}
                  style={{ objectFit: "contain" }}
                  className={`transition-opacity duration-300 ${
                    imageLoading ? "opacity-0 " : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center capitalize pb-1">
                <span className="text-sm">microwave</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
