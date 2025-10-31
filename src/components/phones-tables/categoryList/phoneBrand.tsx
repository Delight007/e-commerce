"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PhoneBrand() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const brands = [
    {
      href: "#",
      src: "/images/tecno.png",
      alt: "Tecno",
    },
    {
      href: "#",
      src: "/images/xiaomi.png",
      alt: "Xiaomi",
    },
    {
      href: "#",
      src: "/images/oraimo.png",
      alt: "Oraimo",
    },
    {
      href: "#",
      src: "/images/infinix.png",
      alt: "Infinix",
    },
    {
      href: "#",
      src: "/images/itel-phones.png",
      alt: "Itel",
    },
    {
      href: "#",
      src: "/images/samsung.png",
      alt: "Samsung",
    },
  ];

  return (
    <div className="w-full h-auto">
      <h2 className="w-full bg-slate-400 rounded-t-md text-black flex justify-center items-center font-[500] text-xl py-3">
        Official Store
      </h2>

      {/* Responsive Grid */}
      <div className="w-full bg-white rounded-b-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3">
        {brands.map((brand, i) => (
          <div
            key={i}
            className="group bg-white rounded-md hover:drop-shadow-xl flex justify-center items-center transition-transform"
          >
            <Link
              href={brand.href}
              className="flex justify-center items-center"
            >
              <div className="relative w-[130px] h-[80px] sm:w-[150px] sm:h-[90px] md:w-[160px] md:h-[100px] lg:w-[180px] lg:h-[110px] group-hover:scale-105 transition-transform duration-200">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
                )}
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  sizes="(max-width: 768px) 130px, (max-width: 1024px) 160px, 180px"
                  priority
                  style={{ objectFit: "contain" }}
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
