"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Brand() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const brands = [
    {
      src: "/images/hisense.png",
      alt: "hisense",
      link: "/appliances/official_Store/hisense",
    },
    {
      src: "/images/ecoflow.jpg",
      alt: "ecoflow",
      link: "/appliances/official_Store/ecoflow",
    },
    {
      src: "/images/nexus.png",
      alt: "nexus",
      link: "/appliances/official_Store/nexus",
    },
    {
      src: "/images/haier-thermocool.png",
      alt: "thermocool",
      link: "/appliances/official_Store/thermocool",
    },
    {
      src: "/images/binatone.png",
      alt: "binatone",
      link: "/appliances/official_Store/binatone",
    },
    {
      src: "/images/ROYAL.jpg",
      alt: "royal",
      link: "/appliances/official_Store/royal",
    },
  ];

  return (
    <div className="w-full bg-white rounded-md overflow-hidden">
      {/* Title */}
      <h2 className="w-full bg-slate-400 text-black text-center font-medium text-lg sm:text-xl py-3">
        Official Store
      </h2>

      {/* Brand Grid */}
      <div
        className="
          grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
          gap-3 p-3
        "
      >
        {brands.map((brand, i) => (
          <Link
            href={brand.link}
            key={i}
            className="group flex justify-center items-center bg-white rounded-md hover:drop-shadow-xl transition"
          >
            <div
              className="
                relative w-[140px] h-[90px] sm:w-[160px] sm:h-[100px] 
                md:w-[180px] md:h-[110px] 
                rounded-md overflow-hidden 
                transition-transform duration-300 group-hover:scale-105
              "
            >
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                priority
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px"
                className={`object-contain rounded-md transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
