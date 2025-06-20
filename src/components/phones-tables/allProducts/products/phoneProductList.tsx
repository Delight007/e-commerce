"use client";
import { useQuery } from "@tanstack/react-query";
import PhoneProductCard from "./PhoneProductCard";

// Fetch products with pagination and category filter
const fetchProducts = async (
  page: number,
  limit: number,
  category?: string
) => {
  try {
    const url = new URL(`/api/products`, window.location.origin);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    if (category) {
      url.searchParams.append("category", category);
    }

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

const ProductsList = ({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category?: string;
}) => {
  const {
    data: productsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", page, category], // Include category in the query key
    queryFn: () => fetchProducts(page, limit, category), // Pass category to the fetch function
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {productsData.products.map((product: any) => (
        <PhoneProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
