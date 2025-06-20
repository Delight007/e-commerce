import deliveryRates from "./delivery";

export const calculateDeliveryCost = (
  state: string,
  weight: number
): { shipping: number; delivery: number; total: number } => {
  const rate = deliveryRates[state];
  const shipping = rate?.perkgshippingRate * weight || 0;
  const delivery = rate?.perdeliveryRate || 0;
  return {
    shipping,
    delivery,
    total: shipping + delivery,
  };
};
