"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KitchenAppliances() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const appliances = [
    {
      src: "/images/blenders.png",
      alt: "Blenders",
      link: "/appliances/blenders",
    },
    {
      src: "/images/dishwashers.png",
      alt: "Dishwashers",
      link: "/appliances/dish-washers",
    },
    { src: "/images/juicers.png", alt: "Juicers", link: "/appliances/juicers" },
    { src: "/images/kettles.png", alt: "Kettles", link: "/appliances/kettles" },
    { src: "/images/mixers.png", alt: "Mixers", link: "/appliances/mixers" },
    {
      src: "/images/range-hoods.png",
      alt: "Range Hoods",
      link: "/appliances/range-hoods",
    },
  ];

  return (
    <div className="w-full bg-white rounded-md overflow-hidden">
      {/* Title */}
      <h2 className="w-full bg-slate-400 rounded-t-md text-black flex justify-center items-center font-semibold text-lg sm:text-xl py-3">
        Kitchen Appliances
      </h2>

      {/* Grid Layout */}
      <div
        className="w-full bg-white rounded-b-md 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
        gap-3 p-3"
      >
        {appliances.map((item, i) => (
          <div key={i} className="group flex justify-center items-center">
            <Link href={item.link} className="w-full flex justify-center">
              <div
                className="relative w-[140px] h-[200px] sm:w-[160px] sm:h-[220px] md:w-[180px] md:h-[240px]
                transition-transform duration-300 group-hover:scale-105 rounded-md"
              >
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
                )}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
                  className={`object-contain rounded-md transition-opacity duration-300 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
