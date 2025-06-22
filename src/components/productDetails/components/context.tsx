"use client";
import deliveryRates from "@/src/utils/delivery";
import { createContext, useContext, useEffect, useState } from "react";
import { useCheckout } from "../../hooks/useCheckoutHooks";
import { Project } from "next/dist/build/swc/types";

export type Product = {
  id: string;
  createdAt: string;
  image: string;
  name: string;
  description: string;
  price: number;
  prevPrice: number;
  offPercent: string;
  brand?: string;
  extraImages?: string[];
  stock: number;
  productDetails: string;
  keyFeatures: string;
  specifications?: {
    [key: string]: string;
  };
  weight: number;
};

type ProductDetailsContextType = {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  product: Product | null;
  shippingFee: number;
  deliveryFee: number;
  doorDelivery: number;
  handleSetProduct: (product: Product | null) => void;
};

//  const shippingFee = Math.max(calculatedShipping, minimumShippingFee);

//   const deliveryFee = stateRates ? stateRates.perdeliveryRate : 0;
//   const doorDelivery = shippingFee + 600;
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
}: // product: initialProduct,
{
  children: React.ReactNode;
  // product: Product;
}) {
  // state variables and functions can be defined here if needed
  const [selectedState, setSelectedState] = useState<string>("Lagos");
  const [selectedCity, setSelectedCity] = useState<string>("Ikeja");
  const state = selectedState;
  const [product, setProduct] = useState<Product | null>(null);

  const handleSetProduct = (product: Product | null) => {
    if (product) {
      setProduct(product);
    }
  };

  const weightString = product?.specifications?.["Weight (kg)"];
  const rawWeight = weightString ? parseFloat(weightString) : 0;
  const totalWeight = rawWeight < 3 ? 3 : rawWeight;

  const stateRates = deliveryRates?.[state];

  const calculatedShipping = stateRates
    ? stateRates.perkgshippingRate * totalWeight
    : 0;

  // ✅ Lower minimum fee for Lagos/Abuja
  const minimumShippingFee = ["Lagos", "Federal Capital Territory"].includes(
    state
  )
    ? 1000
    : 1500;
  const shippingFee = Math.max(calculatedShipping, minimumShippingFee);

  const deliveryFee = stateRates ? stateRates.perdeliveryRate : 0;
  const doorDelivery = shippingFee + 600;

  const { setFee } = useCheckout();

  useEffect(() => {
    setFee({ doorDelivery, shippingFee, deliveryFee });
    console.log("useEffect is running");
    console.log({ doorDelivery, shippingFee, deliveryFee });
  }, [selectedCity, selectedState, product]);

  return (
    <ProductDetailsContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        selectedState,
        setSelectedState,
        product,
        handleSetProduct,
        doorDelivery,
        shippingFee,
        deliveryFee,
      }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
}
