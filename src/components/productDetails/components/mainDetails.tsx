"use client";
import { useCartStore } from "@/src/utils/cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { AddToCartButton } from "../../addToCartButton/addButton";
import AddWhishList from "../../ui/whishListUI";
import UpdateQuantity from "../../updateQuantity/updateQuantity";
import { useProductDetailsContext } from "./context";
import Promotion from "./promotion";
import SlidingImg from "./swiper/swiper";

export default function MainDetails() {
  // --- Hooks at top level ---
  const { product } = useProductDetailsContext();
  const [imageLoading, setImageLoading] = React.useState(true);
  const cartItems = useCartStore((state) => state.items);

  // Safely find itemInCart only if product exists
  const itemInCart = product
    ? cartItems.find((item) => item.id === product.id)
    : null;

  // Safely determine stock status
  const stockStatus = product
    ? product.brand
      ? product.stock > 0
        ? "In stock"
        : "Out of stock"
      : product.stock > 0
      ? "Few items left"
      : "Out of stock"
    : "";

  // --- Early return if product hasn't loaded ---
  if (!product) {
    return (
      <div className="h-[807px] w-[872px] flex items-center justify-center bg-white rounded-md">
        <p className="text-gray-500">Loading product details...</p>
      </div>
    );
  }

  // --- Render ---
  return (
    <div className="bg-white h-[807px] w-[872px] p-2 rounded-md flex">
      {/* LEFT: Images and Share */}
      <div className="w-[300px] h-auto py-1 mx-2">
        {/* Main Image */}
        <div className="relative w-[300px] h-auto pt-1 pb-2">
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

        {/* Extra Images */}
        <div className="w-full mt-2 border-b pb-2">
          {Array.isArray(product.extraImages) &&
            product.extraImages.length > 0 && (
              <SlidingImg extraImg={product.extraImages} />
            )}
        </div>

        {/* Social Share */}
        <div className="py-[6px]">
          <h2 className="uppercase font-medium pb-2">Share this product</h2>
          <div className="flex gap-3 py-2 font-semibold">
            {[TiSocialFacebook, FaXTwitter, MdOutlineWhatsapp].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  className="rounded-full border border-black p-2 w-[30px] h-[30px] flex items-center justify-center hover:text-red-400 hover:border-red-400"
                >
                  <Icon />
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Details */}
      <div className="w-[535px] mx-2">
        {/* Store Badge */}
        <div className="bg-purple-500 text-white w-[100px] my-2 font-medium text-sm text-center">
          {product.brand ? "Official Store" : ""}
        </div>

        {/* Title + Wishlist */}
        <div className="flex flex-col pr-2 justify-between border-b">
          <div className="flex">
            <div className="pr-6">
              <h1 className="text-xl w-[463px] h-auto pt-2 pb-1">
                {product.description}
              </h1>
            </div>
            <div className="text-red-500 text-[22px]">
              <AddWhishList product={product} />
            </div>
          </div>

          {/* Brand Info */}
          {product.brand && (
            <div className="text-black text-sm py-2">
              Brand:
              <Link
                href="#"
                className="capitalize text-blue-500 hover:underline"
              >
                {product.brand}
              </Link>
              <span> | </span>
              <Link href="#" className="text-blue-500 hover:underline">
                Similar products from{" "}
                <span className="capitalize">{product.brand}</span>
              </Link>
            </div>
          )}
        </div>

        {/* Pricing + Stock */}
        <div>
          <div className="py-2 flex gap-[6px]">
            <span className="text-2xl font-semibold">
              ₦ {product.price.toLocaleString()}
            </span>
            <div className="flex gap-1 items-center">
              {product.prevPrice > 0 && (
                <span className="line-through text-gray-500 my-1">
                  ₦ {product.prevPrice.toLocaleString()}
                </span>
              )}
              {Number(product.offPercent) > 0 && (
                <span className="bg-slate-100 p-1 text-red-500 text-[12px]">
                  -{product.offPercent}%
                </span>
              )}
            </div>
          </div>

          <p
            className={`text-[12px] pb-2 ${
              stockStatus === "Out of stock" ? "text-red-500" : "text-green-600"
            }`}
          >
            {stockStatus}
          </p>
          <div className="text-[12px] pb-2">+ shipping from to</div>

          {/* Reviews */}
          <div className="pb-1 text-base">No review yet</div>

          {/* Add to Cart or Quantity Update */}
          <div className="border-b pt-2 pb-4">
            {itemInCart ? (
              <UpdateQuantity item={itemInCart} />
            ) : (
              <AddToCartButton product={product} />
            )}
          </div>

          {/* Promotion Component */}
          <Promotion />
        </div>
      </div>
    </div>
  );
}
