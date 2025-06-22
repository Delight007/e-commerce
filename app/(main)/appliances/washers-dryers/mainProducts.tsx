"use client";

import PaginationButtons from "@/src/components/ui/pagination";
import { useEffect, useState } from "react";
import WashingBar1 from "./components/bar/bar1";
import WashingBar2 from "./components/bar/bar2";
import WashingBar3 from "./components/bar/bar3";
import WashingProductsList from "./components/washingProductList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page
export default function WashingProducts() {
  // Number of products found based on the brand
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/name?page=1&limit=40&name=Washers");
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
          <WashingBar1 totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b">
          <WashingBar3 />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <WashingBar2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          <WashingProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            name="Washers"
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
