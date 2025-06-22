"use client";
import { CartItem, useCartStore } from "@/src/utils/cart";
import { useAuth } from "../hooks/useAuth";

type Props = {
  product: Omit<CartItem, "quantity">;
};

export const AddToCartButton = ({ product }: Props) => {
  const { user } = useAuth(); // Firebase user
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    const item: CartItem = {
      ...product,
      quantity: 1,
    };
    // addToCart(item, user?.uid);
    // Only pass user.uid if user exists
    if (user) {
      addToCart(item, user.uid);
    } else {
      addToCart(item); // local only
    }
    console.log("button click");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-11 bg-red-500 text-white rounded-md  shadow-md shadow-gray-400 text-sm font-semibold hover:bg-red-600 transition-colors duration-300 "
    >
      Add to Cart
    </button>
  );
};
