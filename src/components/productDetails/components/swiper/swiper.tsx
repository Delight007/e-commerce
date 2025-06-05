"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

type SlidingImgProps = {
  extraImg?: string[];
};

export default function SlidingImg({ extraImg = [] }: SlidingImgProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="">
      {/* extra Image for the Products */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={4}
        spaceBetween={8}
      >
        {extraImg.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            {imageLoading && (
              <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
            )}
            <Image
              src={imgUrl}
              alt={`Extra image ${index + 1}`}
              width={40}
              height={40}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`rounded-md object-cover transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
