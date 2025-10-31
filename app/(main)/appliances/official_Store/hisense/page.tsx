"use client";
import Image from "next/image";
import React from "react";
import HisenseCategory from "./category/category1";
import HisenseCategory2 from "./category/category2";
import HisenseSidebar from "./hisenseProducts/sidebar";
import HisenseProducts from "./hisenseProducts/components/hisenseProducts";
import MoreProducts from "./moreProducts";

export default function hisense() {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    // <>
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="relative w-[1200px] h-[383px] mb-5">
        {imageLoading && (
          <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
        )}
        <Image
          src="/images/Hisense.jpg"
          alt="Hisense"
          width={1200}
          height={383}
          priority={true}
          className={`rounded-md transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
        />
        </div>
        <div className="mb-5">
          <HisenseCategory />
        </div>
        <div className="mb-5">
          <HisenseCategory2 />
        </div>
        <div className="flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <HisenseSidebar />
          </div>

          {/* mainproducts */}
          <div>
            <HisenseProducts />
          </div>
        </div>
        <div>
          <MoreProducts />
        </div>
      </div>
    </section>
    // </>
  );
}
