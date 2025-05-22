"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Brand() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="w-full h-[170px] ">
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl min-h-12">
        Official Store
      </h2>
      <div className="w-full h-[120px] bg-white rounded-b-md grid grid-cols-6 py-1 px-2">
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/hisense">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/hisense.png"
                alt="hisense"
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
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/ecoflow">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/ecoflow.jpg"
                alt="ecoflow"
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
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/nexus">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/nexus.png"
                alt="nexus"
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
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/thermocool">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/haier-thermocool.png"
                alt="thermocool"
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
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/binatone">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/binatone.png"
                alt="binatone"
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
          </Link>
        </div>
        <div className="group w-[190px] h-[110px] bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center">
          <Link href="/appliances/official_Store/royal">
            <div className="relative w-[180px] h-[110px] group-hover:scale-105 transition-transform">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src="/images/ROYAL.jpg"
                alt="royal"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
