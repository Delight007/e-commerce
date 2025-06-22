import { useCartStore } from "@/src/utils/cart";
import React from "react";

export default function UpdateQuantity({ item }: any) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  if (!item) return null;
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() =>
          item.quantity > 1
            ? updateQuantity(item.id, item.quantity - 1)
            : removeFromCart(item.id)
        }
        className={`w-[32px] h-[32px] text-lg shadow-md shadow-gray-400 bg-red-500 text-white hover:bg-red-600 font-bold text-center rounded-md  `}
      >
        -
      </button>
      <span className="font-medium">{item.quantity}</span>
      <button
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className="w-[32px] h-[32px] bg-red-500 rounded-md shadow-md shadow-gray-400  hover:bg-red-600 text-center text-white text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}
