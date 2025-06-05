"use client";
import React from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type SlidingImgProps = {
  extraImg?: string[];
};

export default function SlidingImg({ extraImg = [] }: SlidingImgProps) {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="relative w-full h-full group">
      {/* Custom Navigation Buttons */}
      <div className="h-full w-[12px] group absolute left-2">
        <button className="custom-prev absolute left-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300">
          <MdOutlineKeyboardArrowLeft size={10} />
        </button>
      </div>
      <div className="h-full  w-[12px] group absolute right-2">
        <button className="custom-next absolute right-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300">
          <MdOutlineKeyboardArrowRight size={10} />
        </button>
      </div>
      {/* extra Image for the Products */}
      <Swiper
        modules={[Navigation, Autoplay, Mousewheel]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Time between slides (3 seconds)
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        mousewheel={{ forceToAxis: true }}
        freeMode={true} // Enables smooth, momentum-based sliding
        className="w-full h-full rounded-md "
        loop={true}
        slidesPerView={3}
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
