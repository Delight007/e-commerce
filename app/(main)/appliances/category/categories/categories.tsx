"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Category() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const categories = [
    {
      src: "/images/Air-con.png",
      alt: "airCon",
      link: "/appliances/air-conditioners",
    },
    {
      src: "/images/Food_Processor.png",
      alt: "Food_Processor",
      link: "/appliances/food-processor",
    },
    {
      src: "/images/Fridges.png",
      alt: "Fridges",
      link: "/appliances/fridges-freezers",
    },
    {
      src: "/images/Micro-Wave.png",
      alt: "Micro-Wave",
      link: "/appliances/microwaves",
    },
    { src: "/images/Television.png", alt: "Television", link: "/electronics" },
    {
      src: "/images/Washing-Machine.png",
      alt: "Washing-Machine",
      link: "/appliances/washers-dryers",
    },
  ];

  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="w-full bg-slate-400 rounded-t-md text-black flex justify-center items-center font-medium text-lg sm:text-xl py-3">
        Shop By Category
      </h2>

      {/* Grid */}
      <div
        className="w-full bg-white rounded-b-md 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
        gap-2 p-3"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group flex justify-center items-center cursor-pointer"
          >
            <Link href={cat.link} className="w-full flex justify-center">
              <div
                className="relative w-[140px] h-[200px] sm:w-[160px] sm:h-[220px] 
  md:w-[180px] md:h-[250px] transition-transform duration-300 
  group-hover:scale-105 rounded-md overflow-hidden bg-white shadow-sm"
              >
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )}

                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
                  className={`object-cover transition-opacity duration-300 ${
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
