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
import CookingDealsCard from "./cookingDealsCard";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  offPercent: string;
  prevPrice: number;
};

// Fetch products
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`/api/appliances/category/cookingDeals`);
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

export default function CookingDeals() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["cookingDeals-products"],
    queryFn: fetchProducts,
  });

  if (!products?.length) return null;

  return (
    <div className="w-full h-auto bg-white rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-400 px-4 py-3 rounded-t-md">
        <h2 className="text-lg sm:text-xl font-semibold text-black capitalize">
          Top Deals on Cooking Appliances
        </h2>
        <button className="flex items-center text-sm font-medium text-black hover:underline">
          See all <MdOutlineKeyboardArrowRight className="ml-1" />
        </button>
      </div>

      {/* Swiper Wrapper */}
      <div className="relative group px-2 py-3">
        {/* Navigation Buttons */}
        <button
          className="custom-preV absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>

        <button
          className="custom-nexT absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation={{
            nextEl: ".custom-nexT",
            prevEl: ".custom-preV",
          }}
          slidesPerView={1.5}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          grabCursor={true}
          mousewheel={{ forceToAxis: true }}
          freeMode={true}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <CookingDealsCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
