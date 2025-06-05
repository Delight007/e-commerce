"use client";
import Image from "next/image";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import AddWhishList from "../../ui/whishListUI";

export default function MainDetails({ product }: { product: any }) {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="bg-white h-[807px] w-[888px]  p-2 rounded-md flex ">
      <div className="w-[321px] h-[611] px-2 py-1 ">
        <div className="relative w-[321px] h-[400px] pt-1 pb-2 border-b">
          <div>
            {imageLoading && (
              <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={321}
              height={321}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`rounded-md object-cover transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
          <div className=""></div>
        </div>
        <div className="py-2">
          <h2 className="uppercase font-medium pb-2">Share this product</h2>
          <div className="flex gap-3 py-2">
            <button className=" rounded-full border border-black p-2 w-[30px] h-[30px] items-center justify-center flex hover:text-red-400 hover:border-red-400">
              <TiSocialFacebook />
            </button>

            <button className=" rounded-full border border-black p-2 w-[30px] h-[30px] items-center justify-center flex hover:text-red-400 hover:border-red-400">
              <FaXTwitter />
            </button>

            <button className=" rounded-full border border-black p-2 w-[30px] h-[30px] items-center justify-center flex hover:text-red-400 hover:border-red-400">
              <MdOutlineWhatsapp />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[550px] px-2">
        <div className="bg-blue-600 text-white px-3 w-[120px] text-sm ">
          Official Store
        </div>
        <div className="flex px-2 justify-between">
          <div className=" pl-2 pr-6">
            <h1 className="text-xl w-[463px] h-[66px]">
              {product.description}
            </h1>
          </div>
          <div className=" text-red-500 text-[22px]">
            <AddWhishList product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
