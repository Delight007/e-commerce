"use client";
import { createContext, useContext, useState } from "react";

type ProductDetailsContextType = {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
};

export const ProductDetailsContext = createContext<
  ProductDetailsContextType | undefined
>(undefined);

export function useProductDetailsContext() {
  const context = useContext(ProductDetailsContext);
  if (!context) {
    throw new Error(
      "useProductDetailsContext must be used within a ProductDetailsProvider"
    );
  }
  return context;
}
export default function ProductDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // state variables and functions can be defined here if needed
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <ProductDetailsContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        selectedState,
        setSelectedState,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
}
