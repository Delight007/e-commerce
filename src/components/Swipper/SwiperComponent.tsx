"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
      scrollbar={{ draggable: true }}
      className="w-full h-full rounded-md"
      loop={true}
      autoplay={{
        delay: 3000, // Time between slides (3 seconds)
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
        pauseOnMouseEnter: false, // Prevents autoplay from stopping when hovering over
      }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <Image
          src="/images/image1.jpg"
          alt="slide 1"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image2.jpg"
          alt="slide 2"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image3.jpg"
          alt="slide 3"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image4.jpg"
          alt="slide 4"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image5.jpg"
          alt="slide 5"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image6.jpg"
          alt="slide 6"
          width={700}
          height={380}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/image7.jpg"
          alt="slide 7"
          width={700}
          height={380}
        />
      </SwiperSlide>
    </Swiper>
  );
}
