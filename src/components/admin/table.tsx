"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineSettings } from "react-icons/md";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  prevPrice: number;
  image: string;
  stock: number;
  createdAt: string;
};

type ProductTableProps = {
  rowsPerPage: number;
  onRowsPerPageChange: (value: number) => void;
  searchTerm: string;
};

export default function ProductTable({
  rowsPerPage,
  onRowsPerPageChange,
  searchTerm,
}: ProductTableProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const [sortKey, setSortKey] = useState<keyof Product | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/adminProductList");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  // Close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle sorting
  const handleSort = (key: keyof Product) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Filtered + Sorted + Paginated Products
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortKey) return 0;
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === "string") {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue as string)
        : (bValue as string).localeCompare(aValue);
    }

    if (typeof aValue === "number") {
      return sortOrder === "asc"
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number);
    }

    return 0;
  });

  const paginatedProducts = sortedProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-2">Product</th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("description")}
            >
              name
              {sortKey === "description" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("price")}
            >
              Price {sortKey === "price" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("prevPrice")}
            >
              Offer
              {sortKey === "prevPrice" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Purchased</th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("stock")}
            >
              Stock {sortKey === "stock" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Status</th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => handleSort("createdAt")}
            >
              Date
              {sortKey === "createdAt" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => {
            const discount =
              product.prevPrice && product.prevPrice > product.price
                ? Math.round(
                    ((product.prevPrice - product.price) / product.prevPrice) *
                      100
                  )
                : 0;

            return (
              <tr key={product.id} className="border-b">
                <td className="px-4 py-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={56}
                    height={56}
                    className=" object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 max-w-[180px] truncate">
                  {product.description}
                </td>
                <td className="px-4 py-2">${product.price.toLocaleString()}</td>
                <td className="px-4 py-2">{discount}%</td>
                <td className="px-4 py-2">{Math.floor(Math.random() * 200)}</td>
                <td className="px-4 py-2">{product.stock ?? 0}</td>
                <td className="px-4 py-2">
                  {product.stock > 0 ? "Active" : "Out of stock"}
                </td>
                <td className="px-4 py-2">
                  {new Date(product.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={() =>
                        setOpenId(openId === product.id ? null : product.id)
                      }
                      className="cursor-pointer border border-gray-400 p-1 rounded-full inline-block"
                    >
                      <MdOutlineSettings className="text-xl text-red-500" />
                    </div>
                    {openId === product.id && (
                      <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-10">
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                          Edit
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <div className="text-sm text-gray-400">
          Showing {page * rowsPerPage + 1}-
          {Math.min((page + 1) * rowsPerPage, filteredProducts.length)} of
          {filteredProducts.length} entries
        </div>
        <div className="flex items-center">
          <button
            className="border px-4 py-1 rounded disabled:opacity-50 rounded-s-lg text-sm text-red-500"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          >
            Prev
          </button>
          <button
            className="border px-4 py-1 rounded disabled:opacity-50 rounded-e-lg text-sm text-red-500"
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
}
