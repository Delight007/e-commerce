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
import HomeDealsCard from "./homeDealsCard";

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
  const response = await fetch(`/api/appliances/category/homeDeals`);
  if (!response.ok) throw new Error("Failed to fetch products");

  const data = await response.json();
  if (!data.Products || !Array.isArray(data.Products)) return [];

  return data.Products.map((item: any) => ({
    id: item.doc || "unknown-id",
    name: item.name || "Unnamed Product",
    description: item.description || "No description available",
    image: item.image || "/placeholder.png",
    price: item.price || 0,
    offPercent: item.offPercent || "0%",
    prevPrice: item.prevPrice || 0,
  }));
};

export default function HomeDeals() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["Homedeals-products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="w-full bg-white rounded-md overflow-hidden shadow-sm">
      {/* Header */}
      <h2 className="w-full bg-slate-400 text-black flex px-4 items-center justify-between font-medium text-lg sm:text-xl py-3 rounded-t-md">
        Top Deals on Home Appliances
        <span className="text-sm flex items-center cursor-pointer hover:underline">
          see all <MdOutlineKeyboardArrowRight className="ml-1" />
        </span>
      </h2>

      {/* Swiper Section */}
      <div className="relative py-4 px-2 sm:px-3 md:px-4 rounded-b-md">
        {products && products.length > 0 && (
          <div className="group relative">
            {/* Custom Nav Buttons */}
            <button
              className="custom-preV absolute left-1 top-1/2 -translate-y-1/2 z-10 
              bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full 
              opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <MdOutlineKeyboardArrowLeft size={22} />
            </button>
            <button
              className="custom-nexT absolute right-1 top-1/2 -translate-y-1/2 z-10 
              bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full 
              opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <MdOutlineKeyboardArrowRight size={22} />
            </button>

            {/* Swiper */}
            <Swiper
              modules={[Navigation, Mousewheel]}
              navigation={{
                nextEl: ".custom-nexT",
                prevEl: ".custom-preV",
              }}
              slidesPerView={1.3} // ✅ Default: mobile-first
              spaceBetween={8}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 10 },
                640: { slidesPerView: 3, spaceBetween: 12 },
                768: { slidesPerView: 4, spaceBetween: 14 },
                1024: { slidesPerView: 5, spaceBetween: 16 },
                1280: { slidesPerView: 6, spaceBetween: 18 },
              }}
              grabCursor
              mousewheel={{ forceToAxis: true }}
              className="w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <HomeDealsCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
