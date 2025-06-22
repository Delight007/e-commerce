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

export default function FFBar3() {
  const item = [
    { name: "Office Fridge", link: "#" },
    { name: "Fridge", link: "#" },
    { name: "Refrigerator", link: "#" },
    { name: "Double Door", link: "#" },
    { name: "Double Door Fridge", link: "#" },
    { name: "Double Door Fridges", link: "#" },
    { name: "Fridge Double Door", link: "#" },
    { name: "Double Door Refrigerators", link: "#" },
    { name: "Refrigerator Double Door", link: "#" },
    { name: "Polystar Double door Refrigerator", link: "#" },
    { name: "Double Door Refrigerator", link: "#" },
    { name: "Fridge Single Door", link: "#" },
    { name: "Single Door Fridge", link: "#" },
    { name: "Freezing", link: "#" },
    { name: "Hisense Fridge", link: "#" },
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
