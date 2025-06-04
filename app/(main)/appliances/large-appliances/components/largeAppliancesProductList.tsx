"use client";
import { useQuery } from "@tanstack/react-query";
import LargeAppliancesProductCard from "./largeAppliancesProductCard";

// Fetch products with pagination and category filter
const fetchProducts = async (
  page: number,
  limit: number,
  subCategory?: string
) => {
  try {
    const url = new URL(`/api/subCategory`, window.location.origin);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("limit", limit.toString());
    if (subCategory) {
      url.searchParams.append("subCategory", subCategory);
    }

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
    const data = await res.json();
    // console.log("Fetched Products:", data);
    return data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

const LargeAppliancesProductsList = ({
  page,
  limit,
  subCategory,
}: {
  page: number;
  limit: number;
  subCategory?: string;
}) => {
  const {
    data: productsData,
    // error,
    // isLoading,
  } = useQuery({
    queryKey: ["Large Appliances", page, subCategory], // Include category in the query key
    queryFn: () => fetchProducts(page, limit, subCategory), // Pass category to the fetch function
  });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {productsData?.products?.map((product: any) => (
        <LargeAppliancesProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LargeAppliancesProductsList;
