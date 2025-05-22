"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HisenseCategory2() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full h-[153px] bg-white rounded-md grid grid-cols-6 py-2 px-2  ">
      <div className="group w-[190px] h-full bg-white rounded-md   flex justify-center items-center hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] ">
        <Link href="/appliances/official_Store/hisense">
          <div className="group-hover:scale-102"></div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="/appliances/official_Store/ecoflow">
          <div className="group-hover:scale-102"></div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="/appliances/official_Store/nexus">
          <div className=" group-hover:scale-102">
            <div className="relative w-[180px] h-[102px]">
              {imageLoading && (
                <div className="h-full w-full animate-pulse absolute bg-gray-200"></div>
              )}
              <Image
                src="/images/home-audio.jpg"
                alt="audio"
                fill
                sizes="180px"
                style={{ objectFit: "contain" }}
                priority={true}
                className={`rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <div className="flex justify-center items-center capitalize">
              <span className="text-sm">home audio</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="/appliances/official_Store/thermocool">
          <div className="group-hover:scale-102"></div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="/appliances/official_Store/binatone">
          <div className="group-hover:scale-102"></div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="/appliances/official_Store/royal">
          <div className="group-hover:scale-102 "></div>
        </Link>
      </div>
    </div>
  );
}
