"use client";

import PaginationButtons from "@/src/components/ui/pagination";
import { useEffect, useState } from "react";
import BarTop from "./bar/bar";
import BarTop2 from "./bar/bar2";
import ProductsList from "./productList.tsx/productList";

const ITEMS_PER_PAGE = 40;

export default function MainProducts() {
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchTotalProducts() {
      try {
        const response = await fetch(
          `/api/products?page=${currentPage}&limit=${ITEMS_PER_PAGE}&category=Appliances`
        );
        const data = await response.json();
        setTotalProducts(data.total || 0);
      } catch (err) {
        console.error("Error fetching total products:", err);
      }
    }

    fetchTotalProducts();
  }, [currentPage]); // 🔥 only re-fetch when page changes

  const totalPages = totalProducts
    ? Math.ceil(totalProducts / ITEMS_PER_PAGE)
    : 1;

  return (
    <div className="w-full flex justify-center">
      <div
        className="w-full max-w-[1200px] rounded-md bg-white relative 
        shadow-sm border border-gray-200"
      >
        {/* --- Top Bar --- */}
        <div className="w-full sm:h-[60px] h-auto border-b flex items-center">
          <BarTop totalProducts={totalProducts} />
        </div>

        {/* --- Filter/Sort Bar --- */}
        <div className="w-full sm:h-[60px] h-auto  border-b flex items-center">
          <BarTop2 />
        </div>

        {/* --- Product List --- */}
        <div className="p-2 mt-2 mb-4">
          <ProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            category="Appliances"
          />
        </div>

        {/* --- Pagination --- */}
        <div className="flex justify-center items-center mt-6 pb-4">
          {totalPages > 1 && (
            <PaginationButtons
              page={currentPage}
              setPage={setCurrentPage}
              totalProductPerPage={totalPages} // ✅ actual total pages
            />
          )}
        </div>
      </div>
    </div>
  );
}
