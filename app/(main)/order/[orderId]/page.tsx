// /app/orders/[orderId]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/config/firebase";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

interface OrderItem {
  title: string;
  price: number;
  image: string;
  description: string;
  prevPrice?: number; // original price (optional)
  quantity: number;
  productId: string;
}

interface Order {
  id: string;
  status: string;
  totalToPay: number;
  createdAt: any;

  items: OrderItem[];
}

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      const docRef = doc(db, "orders", orderId as string);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as Order;
        setOrder(data);
      }
      setLoading(false);
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!order) {
    return <div className="p-4 text-red-500">Order not found.</div>;
  }

  return (
    <div className=" w-full mx-auto bg-white rounded shadow-md mb-3">
      <h1>
        <Link
          href="/order"
          className="text-lg font-semibold  border-b flex items-center gap-2 p-4"
        >
          <IoArrowBackOutline className="text-xl" /> Order Details
        </Link>
      </h1>

      <div className=" px-3 text-gray-500 text-sm py-3">
        <p className="font-semibold text-black">
          <span>Order ID:</span> {orderId}
        </p>
        <p className="mt-2">
          <span>Placed on </span>
          {order.createdAt?.toDate().toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Total Amount:</span> ₦
          {order.totalToPay.toLocaleString()}
        </p>
        <p className="border-b pb-2">{order.items.length} Items</p>
      </div>

      <div className="px-3">
        <h2 className="text-sm font-semibold mb-2 uppercase p-2">
          Items in this order
        </h2>
        <div className="space-y-4">
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-4 border rounded shadow-sm "
            >
              <div className="flex justify-between">
                <span className="text-white w-[70px] bg-red-500 px-2 py-[2px] uppercase font-medium  text-[12px]">
                  {order.status}
                </span>

                <button>
                  <Link
                    href={`/${item.productId}`}
                    className="bg-red-500 py-3 px-8 rounded-[4px] text-[12px] font-medium text-white"
                  >
                    Buy Again
                  </Link>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded border"
                />
                <div className="flex flex-col gap-2 text-sm">
                  {/* <p className="font-semibold">{item.title}</p> */}
                  <p className="font-semibold">{item.description}</p>
                  <p className="text-gray-500">
                    QTY :
                    <span className="font-semibold pl-1 text-black">
                      {item.quantity}
                    </span>
                  </p>
                  <p>
                    <span className="text-red-500 font-bold">
                      ₦ {item.price.toLocaleString()}
                    </span>
                    {typeof item.prevPrice === "number" &&
                      item.prevPrice > 0 &&
                      item.prevPrice !== item.price && (
                        <span className="ml-2 text-gray-400 line-through">
                          ₦{item.prevPrice.toLocaleString()}
                        </span>
                      )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
