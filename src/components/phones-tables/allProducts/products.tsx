"use client";
import React from "react";
import { useEffect, useState } from "react";
import PaginationButtons from "@/src/components/ui/pagination"; // Your existing MUI pagination component
import BarTop from "./bar/bar";
import BarTop2 from "./bar/bar2";
import ProductsList from "./products/phoneProductList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page

export default function MainPhonesProducts() {
  // Number of products found based on the category
  const [totalProducts, setTotalProducts] = useState<number | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "/api/products?page=1&limit=40&category=Phone & Tablet"
        );
        const data = await response.json();
        setTotalProducts(data.total);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    fetchProducts();
  });

  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="w-[880px] h-[4800px] rounded-md bg-white relative">
        <div className="w-full h-[60px] border-b">
          <BarTop totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <BarTop2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          <ProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            category="Phone & Tablet"
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
