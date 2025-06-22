"use client";

import { useEffect } from "react";
import { useCheckout } from "../hooks/useCheckoutHooks";
import { useShippingCalculator } from "@/src/utils/calculateShippingFee";

type Props = {
  selectedState: string;
  selectedCity: string;
};

const ShippingFeeUpdater = ({ selectedState, selectedCity }: Props) => {
  const { shippingFee, deliveryFee, doorDelivery } = useShippingCalculator(
    selectedState,
    selectedCity
  );
  const { setFee } = useCheckout();

  useEffect(() => {
    setFee({ shippingFee, deliveryFee, doorDelivery });
  }, [shippingFee, deliveryFee, doorDelivery, setFee]);

  return null;
};

export default ShippingFeeUpdater;
