"use client";
// shippingContext.tsx
import React, { createContext, useContext, useState } from "react";

export type ShippingInfo = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: "Pick Up" | "Delivery";
  state: string;
  city: string;
};

const ShippingContext = createContext<{
  shippingInfo: ShippingInfo;
  setShippingInfo: (info: ShippingInfo) => void;
}>({
  shippingInfo: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    deliveryMethod: "Pick Up",
    state: "Lagos",
    city: "Ikeja",
  },
  setShippingInfo: () => {},
});
export const ShippingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    deliveryMethod: "Pick Up",
    state: "Lagos",
    city: "Ikeja",
  });

  return (
    <ShippingContext.Provider value={{ shippingInfo, setShippingInfo }}>
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => useContext(ShippingContext);
