import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function RangeBar3() {
  const item = [
    { name: "Extractor Hood", link: "#" },
    { name: "Hood Extractor", link: "#" },
    { name: "Extractor", link: "#" },
    { name: "Cooker Hood", link: "#" },
    { name: "Smoke Extractor", link: "#" },
    { name: "gas range stove", link: "#" },
    { name: "Heat Extracotr", link: "#" },
    { name: "Kitchen Hood", link: "#" },
    { name: "Kitchen Extractor", link: "#" },
    { name: "Kitchen Extractor Hood", link: "#" },
    { name: "Kitchen Hood Extractor", link: "#" },
    { name: "Kitchen Smoke Extractor", link: "#" },
    { name: "Gas Heat for Home", link: "#" },
    { name: "60Cm Cooker", link: "#" },
    { name: "Kitchen Heat Extractor", link: "#" },
  ];
  return (
    <div className="p-[16px] text-[14px] relative group">
      {/* Custom Navigation Buttons */}
      <button
        className="custom-prV absolute left-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
      >
        <MdOutlineKeyboardArrowLeft size={24} />
      </button>
      <button
        className="custom-neT absolute right-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
      >
        <MdOutlineKeyboardArrowRight size={24} />
      </button>

      <Swiper
        modules={[Navigation, Mousewheel]}
        navigation={{
          nextEl: ".custom-neT",
          prevEl: ".custom-prV",
        }}
        slidesPerView="auto"
        setWrapperSize={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
        grabCursor={true}
        mousewheel={{ forceToAxis: true }}
        freeMode={true}
      >
        <SwiperSlide className="!w-auto min-w-[70px] ">
          <div>Related result:</div>
        </SwiperSlide>

        {item.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto min-w-[70px]">
            <div className="text-orange-500 font-medium border-r-2 px-2 underline">
              <Link href={item.link}>{item.name}</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
