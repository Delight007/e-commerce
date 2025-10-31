"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category1() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const categories = [
    { src: "/images/ANDROID-PHONES.jpg", alt: "Android Phones" },
    { src: "/images/TABLETS.jpg", alt: "Tablets" },
    { src: "/images/IPHONES.jpg", alt: "iPhones" },
    { src: "/images/RENEWED.jpg", alt: "Renewed Devices" },
    { src: "/images/IPADS.jpg", alt: "iPads" },
    { src: "/images/CELLPHONES.jpg", alt: "Cell Phones" },
  ];

  return (
    <div className="w-full h-auto">
      {/* Responsive grid: 2 cols on mobile, 3 on tablet, 6 on desktop */}
      <div className="w-full bg-white rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3">
        {categories.map((cat, i) => (
          <div key={i} className="group flex justify-center items-center">
            <Link href="#">
              <div className="relative w-[140px] h-[190px] sm:w-[160px] sm:h-[220px] lg:w-[180px] lg:h-[245px] transition-transform duration-200 group-hover:scale-105">
                {imageLoading && (
                  <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-md"></div>
                )}
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
                  priority
                  className={`rounded-md object-cover transition-opacity duration-300 ${
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
