"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Modules
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import Image from "next/image";

export default function SwiperComponent() {
  const [imageLoading, setImageLoading] = React.useState(true);

  return (
    <div className="relative  w-full h-full">
      {/* Custom Navigation Buttons */}
      <div className="h-full w-[100px] group absolute left-2">
        <button className="custom-prev absolute left-[1px] opacity-0  group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300">
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
      </div>
      <div className="h-full  w-[100px] group absolute right-2">
        <button className="custom-next absolute right-[1px] opacity-0  group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300">
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true }}
        freeMode={true} // Enables smooth, momentum-based sliding
        className="w-full h-full rounded-md "
        loop={true}
        autoplay={{
          delay: 3000, // Time between slides (3 seconds)
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
              )}
              <Image
                src={`/images/image${index + 1}.jpg`}
                alt={`slide ${index + 1}`}
                // width={700}
                // height={380}
                fill
                sizes="700px 380px"
                priority={true}
                className={`w-full h-auto transition-opacity duration-300 ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
