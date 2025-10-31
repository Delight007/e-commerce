import type { Product } from "@/src/components/productDetails/components/context";
import ProductDetails from "@/src/components/productDetails/productDetails";
import getItemById from "@/src/utils/getItemsById";

// this typing ensures compatibility with Next.js app router
interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ✅ await params first
  const { isExists, data } = await getItemById(id, "Products");

  if (!isExists) return <div>Product not found</div>;

  const productData = data as Product;
  const weightFromSpec = productData?.specifications?.["Weight (kg)"] ?? "0";

  const safeData = { ...productData, weightFromSpec };

  return <ProductDetails product={safeData} />;
}
