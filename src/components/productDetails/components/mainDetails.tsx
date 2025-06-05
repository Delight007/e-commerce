"use client";
import Image from "next/image";
import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import AddWhishList from "../../ui/whishListUI";
import Link from "next/link";
import SlidingImg from "./swiper/swiper";
import Promotion from "./promotion";

type ProductType = {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  prevPrice: number;
  offPercent: string;
  brand?: string;
  extraImages?: string[];
  stock: number;
};
export default function MainDetails({ product }: { product: ProductType }) {
  console.log("Product extraImage:", product.extraImages);

  const [imageLoading, setImageLoading] = React.useState(true);

  // Compute stock status based on brand presence and stock quantity
  const stockStatus = product.brand
    ? product.stock > 0
      ? "In stock"
      : "Out of stock"
    : product.stock > 0
    ? "Few items left"
    : "Out of stock";

  return (
    <div className="bg-white h-[807px] w-[888px]  p-2 rounded-md flex ">
      <div className="w-[300px] h-auto  py-1 mx-2 ">
        {/* Main Product image */}
        <div className="relative w-[300px] h-auto pt-1 pb-2">
          <div>
            {imageLoading && (
              <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              priority
              sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`rounded-md object-cover transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </div>
        {/* Extra Image slides  */}
        <div className="w-full mt-2 border-b pb-2 ">
          {product.extraImages && product.extraImages.length > 0 && (
            <SlidingImg extraImg={product.extraImages} />
          )}
        </div>
        {/* Social Media */}
        <div className="py-[6px]">
          <h2 className="uppercase font-medium pb-2">Share this product</h2>
          <div className="flex gap-3 py-2 font-semibold">
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
      <div className="w-[535px] mx-2 ">
        {/* Official Store Badge for only products with brand  */}
        <div className="bg-purple-500 text-white w-[100px] my-2 font-medium text-sm text-center">
          {product.brand ? "Official Store" : ""}
        </div>
        <div className="flex flex-col pr-2 justify-between border-b">
          {/* product description/name and addWhishlist */}
          <div className="flex ">
            <div className=" pr-6">
              <h1 className="text-xl w-[463px] h-auto pt-2 pb-1">
                {product.description}
              </h1>
            </div>
            <div className=" text-red-500 text-[22px] ">
              <AddWhishList product={product} />
            </div>
          </div>

          {/* Brand Name for the once with only brand */}
          {product.brand && (
            <div className="text-black text-sm py-2">
              Brand:{" "}
              <Link
                href=""
                className="capitalize text-blue-500 hover:underline "
              >
                {product.brand}
              </Link>{" "}
              |{" "}
              <Link href="#" className=" text-blue-500 hover:underline ">
                Similar products from{" "}
                <span className="capitalize">{product.brand}</span>
              </Link>
            </div>
          )}
        </div>

        <div className="">
          {/* Product Price, previous Price and discount */}
          <div className="py-2 flex gap-[6px]">
            <span className="text-2xl font-semibold">
              ₦ {product.price.toLocaleString()}
            </span>
            <div className="flex gap-1 justify-center items-center">
              <span className="line-through text-gray-500 my-1">
                {product.prevPrice > 0 && (
                  <p className="py-1">₦ {product.prevPrice.toLocaleString()}</p>
                )}
              </span>
              <span>
                {Number(product.offPercent) > 0 && (
                  <p className=" bg-slate-100 p-1 flex justify-center items-center text-red-500 text-[12px]">
                    <span>-</span> {product.offPercent} %
                  </p>
                )}
              </span>
            </div>
          </div>

          {/* Stock status display */}
          <p
            className={`text-[12px] pb-2 ${
              stockStatus === "Out of stock" ? "text-red-500" : "text-green-600"
            }`}
          >
            {stockStatus}
          </p>
          <div className="text-[12px] pb-2">+ shipping from to</div>

          {/* Rate for product */}
          <div className="pb-1 text-base">No review yet</div>

          {/* Add Cart  Button  */}
          <div className="border-b pt-2 pb-4">
            <button className="w-full h-[48px] bg-red-400 rounded-md shadow-md  shadow-gray-400 px-4 py-3 flex justify-start items-center">
              <MdOutlineAddShoppingCart className="text-white font-medium text-2xl" />

              <span className="text-white  text-sm flex-1 text-center font-medium">
                Add to cart
              </span>
            </button>
          </div>

          {/* Product Promotion */}
          <div>
            <Promotion />
          </div>
        </div>
      </div>
    </div>
  );
}
