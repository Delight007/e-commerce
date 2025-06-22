"use client";
import { useCartStore } from "@/src/utils/cart";
import { Fugaz_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
import { RiDeleteBin6Line } from "react-icons/ri";
import CartSidebar from "./cartSidebar";
import UpdateQuantity from "../updateQuantity/updateQuantity";

export default function Cart() {
  const [imageLoading, setImageLoading] = React.useState(true);
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="w-full bg-white h-[400px] flex flex-col justify-center items-center">
        <h2 className="text-center py-2 font-medium">Your cart is empty!</h2>
        <p className="text-center py-2">
          Browse our categories and discover our best deals!
        </p>
        <Link
          href="/"
          className="bg-red-500 rounded-md w-36 h-[50px] flex justify-center items-center mt-9 text-white p-4 text-sm font-medium"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className=" flex gap-2 ">
      <div className="bg-white w-[872px] h-auto ">
        <div className="py-2 w-full h-[40px] border-b flex items-center">
          <h2 className="text-lg font-semibold  px-4">
            Cart ( {items.length} )
          </h2>
        </div>
        <article>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="border-b py-4 mx-4  ">
                <div className="flex justify-between">
                  <div className="relative w-[75px] h-[75px]">
                    {imageLoading && (
                      <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
                    )}
                    <Image
                      src={item.image}
                      alt={item.description}
                      width={75}
                      height={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`rounded-md object-cover transition-opacity duration-300 ${
                        imageLoading ? "opacity-0" : "opacity-100"
                      }`}
                      onLoad={() => setImageLoading(false)}
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-base w-[484px] line-clamp-2">
                      {item.description}
                    </h3>
                    <div>
                      <span
                        className={`${fugazOne.className} text-[12px] font-bold`}
                      >
                        gana
                      </span>
                      <span
                        className={`${fugazOne.className} text-red-500 font-semibold text-[10px] uppercase`}
                      >
                        Express
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-xl font-semibold text-right">
                      ₦{item.price.toLocaleString()}
                    </div>
                    <div className="flex gap-1 mt-2">
                      {/* <div className="line-through text-gray-500"> */}
                      {item.prevPrice ? (
                        <div className="line-through text-gray-500">
                          ₦{item.prevPrice.toLocaleString()}
                        </div>
                      ) : null}
                      {/* </div> */}
                      {item.offPercent ? (
                        <div className="bg-slate-100 text-red-500 text-[12px] p-1">
                          -{item.offPercent}%
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex gap-3 text-red-500 font-medium cursor-pointer rounded-md hover:bg-red-300 px-3 py-2"
                  >
                    <RiDeleteBin6Line className="text-xl" />
                    <span className="text-sm">Remove</span>
                  </button>
                  <div>
                    <UpdateQuantity item={item} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="pl-2">
        <CartSidebar total={total} />
      </div>
    </div>
  );
}
