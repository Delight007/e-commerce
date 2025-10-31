"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AirService() {
  const [imageLoading, setImageLoading] = React.useState(false);

  const items = [
    {
      href: "/appliances/vacuum-cleaners",
      src: "/images/vacuum-cleaners.png",
      alt: "vacuum-cleaners",
    },
    {
      href: "/appliances/air-purifiers",
      src: "/images/air-purifiers.png",
      alt: "air-purifiers",
    },
    {
      href: "/appliances/dehumidifiers-accessories",
      src: "/images/dehumidifiers.png",
      alt: "dehumidifiers",
    },
    { href: "/appliances/fans", src: "/images/fans.png", alt: "fans" },
    {
      href: "/appliances/humidifiers",
      src: "/images/humidifiers.png",
      alt: "humidifiers",
    },
    {
      href: "/appliances/space-heaters-accessories",
      src: "/images/water-heaters.png",
      alt: "water-heaters",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl">
        Heating, Cooling & Air Quality
      </h2>

      {/* Grid container */}
      <div className="w-full bg-white rounded-b-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 py-3 px-3">
        {items.map((item, index) => (
          <div key={index} className="group flex justify-center items-center">
            <Link href={item.href} className="w-full flex justify-center">
              <div className="relative w-full aspect-[3/4] max-w-[180px] group-hover:scale-[1.02] transition-transform duration-300">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
                )}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 180px"
                  priority={true}
                  className={`rounded-md transition-opacity duration-300 ${
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
