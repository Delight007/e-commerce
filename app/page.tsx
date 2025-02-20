"use client";
import React from "react";
import SwiperComponent from "@/src/components/Swipper/SwiperComponent";
import Categories from "@/src/components/CategoryList/categories";
import MoreDetailst from "@/src/components/MoreDetails/moreDetailst";
import Deals from "@/src/components/Deals/Deal";

export default function Home() {
  return (
    <div className="mx-10 my-6">
      <div className=" flex gap-4 w-full h-[392px] py-2">
        {/*Products CategoriesList */}
        <div className="flex flex-col rounded-md border bg-white w-[210px] h-full">
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
      <div className="w-full, h-[235px] bg-white  rounded-md my-2 py-1 px-2">
        <Deals />
      </div>
    </div>
  );
}
