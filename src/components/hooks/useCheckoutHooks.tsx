"use client";
import React, { createContext, useContext, useState } from "react";

// Define the type for the fee
type FeeType = {
  shippingFee: number;
  deliveryFee: number;
  doorDelivery: number;
};

// Define the context shape
type CheckoutContextType = {
  fee: FeeType;
  setFee: React.Dispatch<React.SetStateAction<FeeType>>;
};

// Create the context
const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

// Provider component
export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [fee, setFee] = useState<FeeType>({
    shippingFee: 0,
    deliveryFee: 0,
    doorDelivery: 0,
  });

  return (
    <CheckoutContext.Provider value={{ fee, setFee }}>
      {children}
    </CheckoutContext.Provider>
  );
}

// Custom hook to access the checkout context
export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
}
