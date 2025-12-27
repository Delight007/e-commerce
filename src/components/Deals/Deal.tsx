import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Deals() {
  const [imageLoading, setImageLoading] = React.useState(true);

  const deals = [
    { src: "/images/electronics.png", label: "Tv & Audio Deals" },
    { src: "/images/7.gif", label: "New Arrival" },
    { src: "/images/clearance.png", label: "Up to 80% off" },
    { src: "/images/phones.png", label: "Phone & Tablets Deals" },
    { src: "/images/appliances.png", label: "Appliances Deals" },
    { src: "/images/fashion.png", label: "Fashion Deals" },
  ];

  return (
    <div
      className="w-full h-full grid 
      grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
      gap-3 p-3"
    >
      {deals.map((deal, index) => (
        <div
          key={index}
          className="group relative flex flex-col items-center justify-center 
          p-3 rounded-md text-center bg-white hover:shadow-lg 
          transition-all duration-300"
        >
          <Link href="#" className="flex flex-col items-center">
            <div className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px]">
              {imageLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
              )}
              <Image
                fill
                src={deal.src}
                alt={deal.label}
                priority
                className={`rounded object-contain transition-transform duration-300
                  group-hover:scale-105 ${
                    imageLoading ? "opacity-0" : "opacity-100"
                  }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <p className="text-xs sm:text-sm mt-3 px-2">{deal.label}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
