"use client";
import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Mousewheel, Navigation } from "swiper/modules";
import FFCategoryCard from "./ffcategoryCard";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  offPercent: string;
  prevPrice: number;
};

// Function that fetch data
const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`/api/appliances/category/fridges-freezers`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  // console.log("RAW API DATA :", data); // Log the API response

  if (!data.Products || !Array.isArray(data.Products)) {
    // console.error("Invalid Products array in response");
    return [];
  }

  return data.Products.map((item: any) => ({
    id: item.doc || "unknown-id",
    name: item.name || "Unnamed Product",
    description: item.description || "No description available",
    image: item.image || "/placeholder.png",
    price: item.price || 0, // Ensure price is always a number

    offPercent: item.offPercent || "0%",
    prevPrice: item.prevPrice || 0, // Ensure prevPrice is always a number
  }));
};

export default function FFCategory() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["fridgeFreezer-products"],
    queryFn: fetchProducts,
  });

  return (
    <div className="w-full h-[311px] ">
      <h2 className="w-full h-[50px] bg-white rounded-t-md capitalize text-black flex px-4 items-center justify-between font-[500] text-xl min-h-12">
        Top Pick For You
        <span className="text-sm flex justify-center items-center">
          see all <MdOutlineKeyboardArrowRight className="ml-[4px]" />
        </span>
      </h2>
      <div className="w-full h-[265px] bg-white rounded-b-md gap-1 py-1 px-2">
        {products && products.length > 0 && (
          <div className="syinix relative group ">
            {/* Custom Navigation Buttons */}
            <button
              className="custom-preV absolute left-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
            >
              <MdOutlineKeyboardArrowLeft size={24} />
            </button>
            <button
              className="custom-nexT absolute right-[1px] opacity-0 group-hover:opacity-100 top-1/2 transform -translate-y-1/2 z-10 
          bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-md transition duration-300"
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </button>
            <Swiper
              modules={[Navigation, Mousewheel]}
              navigation={{
                nextEl: ".custom-nexT",
                prevEl: ".custom-preV",
              }}
              slidesPerView={6} // Adjust based on screen size
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
              grabCursor={true}
              mousewheel={{ forceToAxis: true }}
              freeMode={true} // Enables smooth, momentum-based sliding
              className="w-full h-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <FFCategoryCard key={product.id} product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
