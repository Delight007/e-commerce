"use client";

import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AcBar3() {
  return (
    <div className="relative group w-[800px] overflow-hidden border-b bg-white">
      {/* Custom Navigation Buttons */}
      <button
        className="custom-prV absolute left-0 top-1/2 -translate-y-1/2 z-10 
        bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 
        group-hover:opacity-100 transition duration-300"
      >
        <MdOutlineKeyboardArrowLeft size={22} />
      </button>

      <button
        className="custom-neT absolute right-0 top-1/2 -translate-y-1/2 z-10 
        bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 
        group-hover:opacity-100 transition duration-300"
      >
        <MdOutlineKeyboardArrowRight size={22} />
      </button>

      {/* Swiper Wrapper */}
      <div className="w-full overflow-hidden px-6">
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation={{
            nextEl: ".custom-neT",
            prevEl: ".custom-prV",
          }}
          slidesPerView="auto"
          grabCursor={true}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          className="!overflow-hidden"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {/* Label */}
          <SwiperSlide className="!w-auto min-w-[70px]">
            <div className="text-gray-700 font-medium px-2">
              Related result:
            </div>
          </SwiperSlide>

          {/* Slides */}
          {[
            "Split Air Conditioner",
            "Split Air Condition",
            "Home Inverter",
            "Inverter Home",
            "Inverter Split Air Conditioner",
            "1.5 Air Conditioners",
            "1.5Hp Air Conditioners",
            "2Hp Air Conditioners",
            "Panasonic Air Condition",
            "Panasonic Air Conditioners",
            "Panasonic Split Air Conditioner",
            "Lg Split Air Conditioner",
            "Lg Split Ac",
            "1hp Ac",
          ].map((item, i) => (
            <SwiperSlide key={i} className="!w-auto min-w-[120px]">
              <div className="text-orange-500 font-medium border-r border-gray-200 px-2 underline whitespace-nowrap">
                <Link href="#">{item}</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
