"use client";
import React from "react";
import SwiperComponent from "@/src/components/Swipper/SwiperComponent";
import Categories from "@/src/components/CategoryList/categories";
import MoreDetailst from "@/src/components/More/moreDetailst";

export default function Home() {
  return (
    <div className="mx-10 my-6">
      <div className=" relative flex gap-4 w-full h-[392px] p-2">
        {/*Products CategoriesList */}
        <div className="flex flex-col rounded border bg-white w-[210px] h-full">
          <Categories />
        </div>

        {/*Products Adverts */}
        <div className="relative rounded-md w-[700px] h-full flex justify-center items-center">
          <SwiperComponent />
        </div>
        <div className="flex flex-col w-[210px]  h-full rounded-md gap-4">
          <MoreDetailst />
        </div>
      </div>
    </div>
  );
}
