import Image from "next/image";
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

const SilverCrestCard: React.FC<ProductProps> = ({ product }) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div className="group relative w-[180px] h-[245px] bg-white rounded-md  flex flex-col justify-center items-center mt-1  mb-1 cursor-pointer  transition-shadow hover:scale-[1.02] duration-300 hover:shadow-[0px_2px_6px_rgba(200,200,200,0.2),0px_-2px_6px_rgba(200,200,200,0.2),2px_0px_6px_rgba(200,200,200,0.2),-2px_0px_6px_rgba(220,220,220,0.2)]">
      <div className="relative w-full h-[170px] flex items-center justify-center ">
        {imageLoading && (
          <div className="absolute w-full h-full bg-gray-200 animate-pulse rounded-t-md"></div>
        )}

        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={170}
          priority={true}
          className={`rounded-t-md transition-opacity duration-300 ${
            imageLoading ? "opacity-0" : "opacity-100"
          }`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          onLoad={() => setImageLoading(false)}
        />
        <span className="absolute top-1 right-3">
          {Number(product.offPercent) > 0 && (
            <span className="ml-2 w-10 text-[12px] bg-slate-100 p-1 flex justify-center items-center text-red-500">
              <span>-</span> {product.offPercent} %
            </span>
          )}
        </span>
      </div>
      <div className="px-2 pb-1">
        <p className="text-black text-[14px] line-clamp-1">
          {product.description}
        </p>
        <p className="text-black font-semibold text-base pt-1">
          ₦ {product.price.toLocaleString()}
        </p>
        {product.prevPrice > 0 && (
          <p className="line-through text-gray-500 text-[12px]">
            {product.prevPrice.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};
export default SilverCrestCard;
