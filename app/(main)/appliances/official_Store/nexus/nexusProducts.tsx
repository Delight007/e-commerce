"use client";
import PaginationButtons from "@/src/components/ui/pagination";
import { useEffect, useState } from "react";
import NexusBar1 from "./components/bar/bar1";
import NexusBar2 from "./components/bar/bar2";
import NexusProductsList from "./components/product/productList";

const ITEMS_PER_PAGE = 40; // Number of products to display per page
export default function NexusProducts() {
  // Number of products found based on the brand
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/brand?page=1&limit=40&brand=Nexus");
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
      <div className="w-[880px] h-auto min-h-[4000px] rounded-md bg-white relative">
        <div className="w-full h-[60px] border-b">
          <NexusBar1 totalProducts={totalProducts} />
        </div>
        <div className="w-full h-[60px] border-b flex items-center">
          <NexusBar2 />
        </div>
        <div className="p-2 mt-2 mb-4">
          {
            <NexusProductsList
              page={currentPage}
              limit={ITEMS_PER_PAGE}
              brand="Nexus"
            />
          }
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
