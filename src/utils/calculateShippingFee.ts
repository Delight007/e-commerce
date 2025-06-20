import { useCartStore } from "@/src/utils/cart";
import deliveryRates from "@/src/utils/delivery";

export const useShippingCalculator = (
  selectedState: string,
  selectedCity: string
) => {
  const items = useCartStore((state) => state.items);
  const stateRates = deliveryRates[selectedState];
  const perKgRate = stateRates?.perkgshippingRate || 0;

  const isLagosOrFCT = ["Lagos", "Federal Capital Territory"].includes(
    selectedState
  );
  const flatRate = isLagosOrFCT ? 1000 : 1500;

  // 🔁 Calculate shipping per item
  const shippingFee = items.reduce((total, item) => {
    const rawWeight = parseFloat(item.specifications?.["Weight (kg)"] || "0");

    const itemShipping =
      rawWeight < 3
        ? flatRate * item.quantity
        : rawWeight * perKgRate * item.quantity;

    return total + itemShipping;
  }, 0);

  const deliveryFee = stateRates?.perdeliveryRate || 0;
  const doorDelivery = shippingFee + 600;

  return { shippingFee, deliveryFee, doorDelivery };
};
