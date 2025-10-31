"use client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard/productCard";

// ✅ Match your API response exactly
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  offPercent: string;
  prevPrice: number;
};

interface ProductsResponse {
  products: Product[];
  total: number;
}

const fetchProducts = async (
  page: number,
  limit: number,
  category?: string
): Promise<ProductsResponse> => {
  const url = new URL(`/api/products`, window.location.origin);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());
  if (category) url.searchParams.append("category", category);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);

  return res.json();
};

export default function ProductsList({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category?: string;
}) {
  const {
    data: productsData,
    error,
    isLoading,
  } = useQuery<ProductsResponse, Error>({
    queryKey: ["products", page, category],
    queryFn: () => fetchProducts(page, limit, category),
    placeholderData: keepPreviousData, // ✅ React Query v5 style
  });

  if (isLoading)
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: limit }).map((_, i) => (
          <div
            key={i}
            className="w-full h-[320px] bg-gray-200 animate-pulse rounded-md"
          />
        ))}
      </div>
    );

  if (error)
    return (
      <p className="text-red-500 text-center my-4">
        Error fetching products: {error.message}
      </p>
    );

  if (!productsData?.products?.length)
    return (
      <p className="text-gray-600 text-center my-6">
        No products found in this category.
      </p>
    );

  return (
    <div className="grid  sm:grid-cols-3 md:grid-cols-4 gap-2">
      {productsData.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
