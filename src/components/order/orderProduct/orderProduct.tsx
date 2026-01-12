"use client";

import { auth, db } from "@/src/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

interface OrderItem {
  title: string;
  price: number;
  image: string;
  description: string;
}

interface Order {
  id: string;
  status: string;
  totalToPay: number;
  createdAt: any;
  items: OrderItem[];
}

interface ProductCard {
  item: OrderItem;
  orderId: string;
  status: string;
  createdAt: any;
}

export default function OrderProduct() {
  const [productCards, setProductCards] = useState<ProductCard[]>([]);
  const [filter, setFilter] = useState<"ongoing" | "closed">("ongoing");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      const ordersRef = collection(db, "orders");
      const statusFilter =
        filter === "ongoing"
          ? ["Ongoing", "Shipped", "Ready for Pickup", "Delivered", "paid"]
          : ["Cancelled", "Returned"];

      const q = query(ordersRef, where("userId", "==", userId));
      const snapshot = await getDocs(q);

      const flattened: ProductCard[] = [];

      snapshot.docs.forEach((doc) => {
        const data = doc.data() as Order;
        if (statusFilter.includes(data.status)) {
          data.items.forEach((item) => {
            flattened.push({
              item,
              orderId: doc.id,
              status: data.status,
              createdAt: data.createdAt,
            });
          });
        }
      });

      setProductCards(flattened);
    };

    fetchOrders();
  }, [userId, filter]);

  return (
    <div className="lg:w-[880px] w-full min-h-[660px] bg-white rounded-md">
      <h1 className="font-semibold py-2 px-2 w-full border-b text-lg">
        Orders
      </h1>

      <div className="px-2">
        <div className="flex gap-2 border-b h-[48px] pt-4 px-2">
          <button
            onClick={() => setFilter("ongoing")}
            className={`uppercase lg:text-base text-xs  lg:font-semibold font-medium px-4 ${
              filter === "ongoing"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            Ongoing / Delivered
          </button>
          <button
            onClick={() => setFilter("closed")}
            className={`uppercase text-base font-semibold px-4 ${
              filter === "closed"
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
          >
            Closed Orders
          </button>
        </div>

        {productCards.length === 0 ? (
          <div className="w-full h-[400px] flex flex-col items-center justify-center">
            <h1 className="font-semibold">You have placed no orders yet!</h1>
            <p className="text-sm">
              All your orders will be saved here for you to access their state
            </p>
            <span className="text-sm">anytime.</span>
            <button className="py-2 px-4 rounded-md bg-red-500 text-white font-semibold mt-3">
              Continue shopping
            </button>
          </div>
        ) : (
          <div className="p-4 space-y-4 overflow-y-auto max-h-[480px] w-full">
            {productCards.map(({ item, orderId, status, createdAt }, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 border rounded-md shadow-sm hover:shadow w-full"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div className="flex flex-col lg:justify-between text-sm w-full">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <div className="flex flex-row justify-between w-full">
                      <p className=" font-semibold text-[12px] lg:max-w-[300px] w-[100px] truncate">
                        {item.description}
                      </p>
                      <span className="text-[12px] text-red-500 font-medium hover:underline">
                        <Link href={`/order/${orderId}`}>See details</Link>
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 ">
                      Order ID: {orderId}
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-gray-500 flex flex-col gap-1">
                    <p className="text-[12px]">
                      <span className="bg-red-500 py-[2px] px-1 text-white font-semibold">
                        {status}
                      </span>
                    </p>
                    <p>{createdAt?.toDate().toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
