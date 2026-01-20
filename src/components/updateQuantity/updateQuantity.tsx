"use client";
import { useCartStore } from "@/src/utils/cart";
import toast from "react-hot-toast";

export default function UpdateQuantity({ item }: any) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (!item) return null;

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
      toast.success(
        `Decreased quantity of ${item.name} to ${item.quantity - 1}`
      );
    } else {
      removeFromCart(item.id);
      toast.success(`${item.name} removed from cart`);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
    toast.success(`Increased quantity of ${item.name} to ${item.quantity + 1}`);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={handleDecrease}
        className="w-[32px] h-[32px] text-lg shadow-md shadow-gray-400 bg-red-500 text-white hover:bg-red-600 font-bold text-center rounded-md"
      >
        -
      </button>
      <span className="font-medium">{item.quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-[32px] h-[32px] bg-red-500 rounded-md shadow-md shadow-gray-400 hover:bg-red-600 text-center text-white text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}
