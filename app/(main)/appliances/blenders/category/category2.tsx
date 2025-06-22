"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlenderCategory2() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full h-[153px] rounded-md grid grid-cols-6 py-2 px-2  ">
      <div className="group w-[190px] h-full bg-white rounded-md   flex justify-center items-center hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] ">
        <Link href="#">
          <div className="group-hover:scale-102">
            <div className="relative w-[180px] h-[102px] ">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/juicers-dispensersX.png"
                alt="juicers"
                fill
                sizes="180px"
                priority={true}
                style={{ objectFit: "contain" }}
                className={`rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <div className="flex justify-center items-center">
              <span className="text-sm">Juicers Dispensers</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="#">
          <div className="group-hover:scale-102">
            <div className="relative w-[180px] h-[102px] ">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/small-appliancesX.png"
                alt="s-appliances"
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
              <span className="text-sm">Small Appliances</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="#">
          <div className=" group-hover:scale-102">
            <div className="relative w-[180px] h-[102px]">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/large-appliancesX.png"
                alt="l-appliances"
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
              <span className="text-sm">Large Appliances</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="#">
          <div className="group-hover:scale-102">
            <div className="relative w-[180px] h-[102px] ">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/papers-notesX.png"
                alt="paper notes"
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
            <div className="flex justify-center items-center">
              <span className="text-sm">Stationaries</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="#">
          <div className="group-hover:scale-102">
            <div className="relative w-[180px] h-[102px] ">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/cosy-bedroomX.png"
                alt="cosy"
                fill
                sizes="180px"
                style={{ objectFit: "contain" }}
                priority={true}
                // style={{ objectFit: "contain" }}
                className={`rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <div className="flex justify-center items-center  capitalize">
              <span className="text-sm">Home Makeover</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="group w-[190px] h-full bg-white rounded-md hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)] flex justify-center items-center">
        <Link href="#">
          <div className="group-hover:scale-102 ">
            <div className="relative w-[180px] h-[102px] ">
              {imageLoading && (
                <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
              )}
              <Image
                src="/images/cookwareX.png"
                alt="cookerware"
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
              <span className="text-sm">Cookware</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
