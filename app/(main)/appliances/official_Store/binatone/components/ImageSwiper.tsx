"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function ImageSwiper() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="relative  ">
      {/* Custom Navigation Buttons */}
      <div className="h-full w-[100px] group absolute left-2">
        <button
          className="custom-prev absolute left-[1px] opacity-0  group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
                  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
      </div>
      <div className="h-full  w-[100px] group absolute right-2">
        <button
          className="custom-next absolute right-[1px] opacity-0  group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
                  bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
        >
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
        className="w-full h-full rounded-md cursor-pointer"
        loop={true}
        autoplay={{
          delay: 3000, // Time between slides (3 seconds)
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
      >
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS1.jpg"
              alt="binatoneS1"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS2.jpg"
              alt="binatoneS2"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS3.jpg"
              alt="binatoneS3"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS4.jpg"
              alt="binatoneS4"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS5.jpg"
              alt="binatoneS5"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-[1200px] h-[383px]">
            {imageLoading && (
              <div className="absolute w-full h-full bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src="/images/binatoneS6.jpg"
              alt="binatoneS6"
              width={1200}
              height={383}
              priority={true}
              className={`rounded-md transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
