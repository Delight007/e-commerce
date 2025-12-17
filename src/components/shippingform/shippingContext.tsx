// "use client";
// // shippingContext.tsx
// import React, { createContext, useContext, useState } from "react";

// export type ShippingInfo = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   address: string;
//   deliveryMethod: "Pick Up" | "Delivery";
//   state: string;
//   city: string;
// };

// const ShippingContext = createContext<{
//   shippingInfo: ShippingInfo;
//   setShippingInfo: (info: ShippingInfo) => void;
// }>({
//   shippingInfo: {
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     deliveryMethod: "Pick Up",
//     state: "Lagos",
//     city: "Ikeja",
//   },
//   setShippingInfo: () => {},
// });
// export const ShippingProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     deliveryMethod: "Pick Up",
//     state: "Lagos",
//     city: "Ikeja",
//   });

//   return (
//     <ShippingContext.Provider value={{ shippingInfo, setShippingInfo }}>
//       {children}
//     </ShippingContext.Provider>
//   );
// };

// export const useShipping = () => useContext(ShippingContext);

"use client";
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

type ShippingContextType = {
  shippingInfo: ShippingInfo;
  setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfo>>;
};

const ShippingContext = createContext<ShippingContextType | undefined>(
  undefined
);

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

export const useShipping = () => {
  const context = useContext(ShippingContext);
  if (!context) {
    throw new Error("useShipping must be used within ShippingProvider");
  }
  return context;
};
