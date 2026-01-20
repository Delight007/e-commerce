import { User } from "firebase/auth";
import { useEffect, useState } from "react";

export const useUserShippingFromOrders = (user: User | null) => {
  const [shippingInfo, setShippingInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchLatestOrder = async () => {
      try {
        const res = await fetch(`/api/user-latest-order?userId=${user.uid}`);

        if (!res.ok) {
          throw new Error("Failed request");
        }

        const data = await res.json();
        setShippingInfo(data?.shippingInfo ?? null);
      } catch (error) {
        console.error("Failed to fetch shipping info", error);
        setShippingInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestOrder();
  }, [user]);

  return { shippingInfo, loading };
};
