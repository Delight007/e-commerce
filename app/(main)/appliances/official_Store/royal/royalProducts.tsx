"use client";

import PaginationButtons from "@/src/components/ui/pagination";

import React, { useEffect, useState } from "react";
import RoyalBar1 from "./components/bar/bar1";
import RoyalBar2 from "./components/bar/bar2";
import RoyalProductsList from "./components/royalProductList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page
export default function RoyalProducts() {
  // Number of products found based on the brand
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/brand?page=1&limit=40&brand=Royal");
        const data = await response.json();
        setTotalProducts(data.total);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  }, []);

  // Current page state
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className="w-[880px] h-auto min-h-[1300px]  rounded-md bg-white relative">
        <div className="w-full h-[60px] border-b">
          <RoyalBar1 totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <RoyalBar2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          <RoyalProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            brand="Royal"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <PaginationButtons
            page={currentPage}
            setPage={setCurrentPage}
            totalProductPerPage={Math.ceil(100 / ITEMS_PER_PAGE)} // Replace 100 with the actual total from the API
          />
        </div>
      </div>
    </div>
  );
}
