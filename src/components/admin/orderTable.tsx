"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ShippingInfo = {
  address: string;
  city: string;
  deliveryMethod: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  state: string;
};

type OrderItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  stock: number;
};

type Order = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  items: OrderItem[];
  paymentRef: string;
  shippingInfo?: ShippingInfo;
  status: string;
  total: number;
  totalToPay: number;
  userId: string;
};

type ProductTableProps = {
  rowsPerPage: number;
  onRowsPerPageChange: (value: number) => void;
  searchTerm: string;
};

const OrdersTable = ({
  rowsPerPage,
  onRowsPerPageChange,
  searchTerm,
}: ProductTableProps) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState<keyof Order | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/adminOrderList");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleShipOrder = async (orderId: string) => {
    try {
      const res = await fetch(`/api/updateOrderStatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: "Shipped" }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: "Shipped" } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleReadyForPickup = async (orderId: string) => {
    try {
      const res = await fetch(`/api/updateOrderStatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status: "Ready for Pickup" }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId
            ? { ...order, status: "Ready for Pickup" }
            : order
        )
      );
    } catch (error) {
      console.error("Error updating order to Ready for Pickup:", error);
    }
  };

  const handleSort = (key: keyof Order) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredOrders = orders.filter((order) => {
    const search = searchTerm.toLowerCase();
    const itemMatch = order.items?.some(
      (item) =>
        item.name?.toLowerCase().includes(search) ||
        item.description?.toLowerCase().includes(search)
    );
    const orderDescriptionMatch = order.description
      ?.toLowerCase()
      .includes(search);

    return itemMatch || orderDescriptionMatch;
  });
  const paginatedOrders = filteredOrders.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );
  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  return (
    <div className="overflow-x-auto mt-3">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("id")}
            >
              Order ID {sortKey === "id" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Product</th> {/* Not sortable directly */}
            <th
              className="px-4 py-2 cursor-pointer max-w-[200px]"
              onClick={() => handleSort("name")}
            >
              Customer {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("total")}
            >
              Amount {sortKey === "total" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Stock</th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status {sortKey === "status" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOrders.flatMap((order) =>
            order.items?.map((item, itemIndex) => {
              const shipping = order.shippingInfo;
              const fullName = shipping
                ? `${shipping.firstName} ${shipping.lastName}`
                : "Unknown";
              const fullAddress = shipping
                ? `${shipping.address}, ${shipping.city}, ${shipping.state}`
                : "N/A";

              return (
                <tr
                  key={`${order.id}-${itemIndex}`}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-2 max-w-[100px] truncate">
                    {order.id}
                  </td>
                  <td className="px-4 py-2 flex gap-2 items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover rounded"
                    />
                    <span className="max-w-[150px] truncate">
                      {item.description}
                    </span>
                  </td>
                  <td className="px-4 py-2">{fullName}</td>
                  <td className="px-4 py-2">
                    ₦
                    {typeof item.price === "number"
                      ? item.price.toLocaleString()
                      : "0"}
                  </td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{item.stock ?? 0}</td>
                  <td className={`px-4 py-2`}>
                    <span
                      className={`font-semibold ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Ongoing"
                          ? "text-yellow-600"
                          : order.status === "Ready for Pickup"
                          ? "text-purple-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>

                    {itemIndex === 0 && (
                      <>
                        {order.status === "Ongoing" && (
                          <button
                            onClick={() => handleShipOrder(order.id)}
                            className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            Accept
                          </button>
                        )}

                        {order.status === "Shipped" && (
                          <button
                            onClick={() => handleReadyForPickup(order.id)}
                            className="ml-2 px-2 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600"
                          >
                            Ready
                          </button>
                        )}
                      </>
                    )}
                  </td>
                  <td className="px-4 py-2 max-w-[200px] truncate">
                    {fullAddress}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <div className="text-sm text-gray-400">
          Showing {page * rowsPerPage + 1}-
          {Math.min((page + 1) * rowsPerPage, filteredOrders.length)} of
          {filteredOrders.length} entries
        </div>
        <div className="flex items-center">
          <button
            className="border px-4 py-1 rounded-s-lg text-sm text-red-500 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          >
            Prev
          </button>
          <button
            className="border px-4 py-1 rounded-e-lg text-sm text-red-500 disabled:opacity-50"
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={page >= totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrdersTable;
