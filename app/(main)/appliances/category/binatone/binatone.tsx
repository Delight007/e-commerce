"use client";
import { useQuery } from "@tanstack/react-query";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BinatoneCard from "./binatoneCard";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  offPercent: string;
  prevPrice: number;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`/api/appliances/category?brand=Binatone`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  if (!data.Products || !Array.isArray(data.Products)) return [];

  return data.Products.map((item: any) => ({
    id: item.doc || "unknown-id",
    name: item.data?.name || "Unnamed Product",
    description: item.data?.description || "No description available",
    image: item.data?.image || "/placeholder.png",
    price: item.data?.price ?? 0,
    offPercent: item.data?.offPercent || "0%",
    prevPrice: item.data?.prevPrice ?? 0,
  }));
};

export default function Binatone() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["binatone-products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="w-full">
      {/* Section Header */}
      <h2 className="w-full h-[50px] bg-slate-400 rounded-t-md capitalize text-black flex px-4 items-center justify-between font-[500] text-xl">
        Binatone Official Store
        <span className="text-sm flex justify-center items-center cursor-pointer hover:underline">
          see all <MdOutlineKeyboardArrowRight className="ml-[4px]" />
        </span>
      </h2>

      {/* Carousel Container */}
      <div className="w-full bg-white rounded-b-md py-2 px-2 relative group">
        {products && products.length > 0 && (
          <>
            {/* Navigation Buttons */}
            <button
              className="custom-prev absolute left-[2px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
              bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
            >
              <MdOutlineKeyboardArrowLeft size={24} />
            </button>
            <button
              className="custom-next absolute right-[2px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
              bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </button>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Mousewheel]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              grabCursor={true}
              mousewheel={{ forceToAxis: true }}
              freeMode={true}
              className="w-full h-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <BinatoneCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
}
