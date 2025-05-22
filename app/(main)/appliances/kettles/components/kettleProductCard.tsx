"use client";

import AddWhishList from "@/src/components/ui/whishListUI";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    offPercent: string;
    prevPrice: number;
  };
}

const KettleProductCard: React.FC<ProductProps> = ({ product }) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className=" relative">
      <Link href="#">
        <div className="rounded-lg w-[208px] h-[440px] flex flex-col items-center group cursor-pointer relative transition-shadow hover:scale-[1.02] duration-300 hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)]">
          <div className="flex flex-col gap-1">
            <div className="relative w-[206px] h-[206px]">
              {imageLoading && (
                <div className="absolute w-full h-full bg-gray-200 animate-pulse"></div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={206}
                height={206}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`rounded-md object-cover ${
                  imageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
            <div className="w-full h-[154px] px-2 pb-2">
              <p className="text-black text-[12px] line-clamp-2">
                {product.description}
              </p>
              <p className="text-black font-semibold text-sm pt-1">
                ₦ {product.price.toLocaleString()}
              </p>
              <div className="flex text-[12px] w-full h-5 mt-2">
                {product.prevPrice > 0 && (
                  <p className="line-through text-gray-500 text-center">
                    {product.prevPrice.toLocaleString()}
                  </p>
                )}
                {Number(product.offPercent) > 0 && (
                  <span className="ml-2 bg-slate-100 p-1 flex justify-center items-center text-red-500">
                    <span>-</span> {product.offPercent} %
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-2 pt-2 absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full h-11 bg-red-500 text-white rounded-md  shadow-md shadow-gray-400 text-sm font-semibold ">
              Add to cart
            </button>
          </div>
        </div>
      </Link>
      <span className="absolute right-3 top-64 text-sm text-red-500 hover:bg-gray-300 p-1 rounded-xl">
        <AddWhishList product={product} />
      </span>
    </div>
  );
};
export default KettleProductCard;
