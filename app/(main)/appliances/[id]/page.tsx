import ProductDetailsProvider from "@/src/components/productDetails/components/context";
import ProductDetails from "@/src/components/productDetails/productDetails";
import { db } from "@/src/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

type props = {
  params: { id: string };
};
export default async function page({ params }: props) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  const id = params.id;

  const docRef = doc(db, "Products", id);
  // You can use docRef to fetch product details using Firestore methods
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return <div>Product not found</div>;
  }

  const productData = docSnap.data();
  const product = {
    id: docSnap.id,
    ...productData,
    createdAt:
      typeof productData.createdAt?.toMillis === "function"
        ? productData.createdAt.toMillis()
        : null,
  };
  return (
    <div>
      <ProductDetailsProvider>
        <ProductDetails product={product} />
      </ProductDetailsProvider>
    </div>
  );
}
