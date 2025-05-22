"use client";

import PaginationButtons from "@/src/components/ui/pagination";
import React, { useEffect, useState } from "react";
import BundleBar2 from "../cooking-appliances-kitchen-bundle/components/bar/bar2";
import BundleBar1 from "../cooking-appliances-kitchen-bundle/components/bar/bar1";
import BundleBar3 from "../cooking-appliances-kitchen-bundle/components/bar/bar3";
import BundleProductsList from "../cooking-appliances-kitchen-bundle/components/dishProductList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page
export default function BundleProducts() {
  // Number of products found based on the brand
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "/api/name?page=1&limit=40&name=Kitchen Sets"
        );
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
      <div className="w-[880px] h-auto min-h-[1800px] rounded-md bg-white relative pb-8">
        <div className="w-full h-[60px] ">
          <BundleBar1 totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b">
          <BundleBar3 />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <BundleBar2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          <BundleProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            name="Kitchen Sets"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <PaginationButtons
            page={currentPage}
            setPage={setCurrentPage}
            totalPages={Math.ceil(100 / ITEMS_PER_PAGE)} // Replace 100 with the actual total from the API
          />
        </div>
      </div>
    </div>
  );
}
