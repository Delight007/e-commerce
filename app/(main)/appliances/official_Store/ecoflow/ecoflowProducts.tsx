"use client";

import PaginationButtons from "@/src/components/ui/pagination";

import { useEffect, useState } from "react";
import EcoflowBar1 from "./components/Bar/ecoflowBar1";
import EcoflowBar2 from "./components/Bar/ecoflowBar2";
import EcoflowProductsList from "./components/ecoflowProductList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page
export default function EcoflowProducts() {
  // Number of products found based on the brand
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "/api/brand?page=1&limit=40&brand=Ecoflow"
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
      <div className="w-[880px] h-[4800px] rounded-md bg-white relative">
        <div className="w-full h-[60px] border-b">
          <EcoflowBar1 totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <EcoflowBar2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          <EcoflowProductsList
            page={currentPage}
            limit={ITEMS_PER_PAGE}
            brand="Ecoflow"
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
