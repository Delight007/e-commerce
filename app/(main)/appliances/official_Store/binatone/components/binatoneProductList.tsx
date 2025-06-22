"use client";
import { useQuery } from "@tanstack/react-query";
import BinatoneProductCard from "./binatoneProductCard";

// Fetch products with pagination and category filter
const fetchProducts = async (page: number, limit: number, brand?: string) => {
  try {
    const url = new URL(`/api/brand`, window.location.origin);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    if (brand) {
      url.searchParams.append("brand", brand);
    }

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
    const data = await res.json();
    console.log("Fetched Products:", data);
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

const BinatoneProductsList = ({
  page,
  limit,
  brand,
}: {
  page: number;
  limit: number;
  brand?: string;
}) => {
  const {
    data: productsData,
    // error,
    // isLoading,
  } = useQuery({
    queryKey: ["BinatoneBrand-products", page, brand], // Include category in the query key
    queryFn: () => fetchProducts(page, limit, brand), // Pass category to the fetch function
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {productsData?.products?.map((product: any) => (
        <BinatoneProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BinatoneProductsList;
