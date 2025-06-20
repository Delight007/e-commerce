"use client";
import { useEffect } from "react";
import { useCartStore } from "@/src/utils/cart";
import { useAuth } from "../hooks/useAuth";
// import { useAuth } from "@/src/hooks/useAuth";

export const SyncCartOnLogin = () => {
  const { user } = useAuth();
  const items = useCartStore((state) => state.items);
  const setCart = useCartStore((state) => state.setCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const syncWithFirebase = useCartStore((state) => state.syncWithFirebase);

  useEffect(() => {
    const sync = async () => {
      if (!user?.uid) return;

      const localItems = [...items];
      // Optional: clear Zustand cart to prevent overwrite loop
      clearCart();

      // Set the cart again (to trigger Zustand state update)
      setCart(localItems);

      // Save merged or fresh cart to Firestore
      await syncWithFirebase(user.uid);
    };

    sync();
  }, [user?.uid]);

  return null;
};
