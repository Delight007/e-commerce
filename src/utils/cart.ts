// "use client";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { db } from "../config/firebase";

// A single product in cart
export type CartItem = {
  id: string;
  description: string;
  price: number;
  prevPrice?: number;
  offPercent?: string;
  image: string;
  quantity: number;
  specifications?: {
    weight?: string;
    [key: string]: any;
  };
};

//  what the cart can store
type CartState = {
  items: CartItem[];
  setCart: (items: CartItem[]) => void;
  addToCart: (item: CartItem, userId?: string) => void;
  removeFromCart: (id: string, userId?: string) => void;
  updateQuantity: (id: string, quantity: number, userId?: string) => void;
  clearCart: (userId?: string) => void;
  syncWithFirebase: (userId: string) => Promise<void>;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      setCart: (items) => set({ items }),

      addToCart: (item, userId) => {
        console.log("Adding to cart:", item);
        const state = get();
        const exists = state.items.find((i) => i.id === item.id);
        const updatedItems = exists
          ? state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          : [...state.items, item];

        set({ items: updatedItems });
        if (userId) saveCartToFirebase(userId, updatedItems);
        console.log("Cart saved to Firestore for user:", userId);
      },

      removeFromCart: (id, userId) => {
        const updatedItems = get().items.filter((item) => item.id !== id);
        set({ items: updatedItems });
        if (userId) saveCartToFirebase(userId, updatedItems);
      },

      updateQuantity: (id, quantity, userId) => {
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        set({ items: updatedItems });
        if (userId) saveCartToFirebase(userId, updatedItems);
      },

      clearCart: (userId) => {
        set({ items: [] });

        // 🔑 THIS is the missing piece
        localStorage.removeItem("cart-storage");

        if (userId) saveCartToFirebase(userId, []);
      },

      syncWithFirebase: async (userId: string) => {
        const docRef = doc(db, "carts", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          set({ items: data.items || [] });
        }
      },
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

// Firestore write helper
const saveCartToFirebase = async (userId: string, items: CartItem[]) => {
  try {
    const docRef = doc(db, "carts", userId);
    await setDoc(docRef, { items });
    console.log("Cart saved to Firestore for user:", userId);
  } catch (error) {
    console.log("save to firebase failed", error);
  }
};
