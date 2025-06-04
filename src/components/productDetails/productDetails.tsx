"use client";
import Image from "next/image";
import React from "react";

export default function ProductDetails({ product }: { product: any }) {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <div className="relative w-[206px] h-[206px]">
        {imageLoading && (
          <div className="absolute w-full h-full animate-pulse bg-gray-200"></div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={206}
          height={206}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`rounded-md object-cover transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setImageLoading(false)}
        />
      </div>
    </div>
  );
}
