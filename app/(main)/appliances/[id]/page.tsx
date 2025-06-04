// "use client";
import ProductDetails from "@/src/components/productDetails/productDetails";
import { db } from "@/src/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

type props = {
  params: { id: string };
};
export default async function page({ params }: props) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  const { id } = params;

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
    createdAt: productData.createdAt?.toDate().toISOString() || null, // convert to string
  };
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}
