import ProductDetailsProvider from "@/src/components/productDetails/components/context";
import ProductDetails from "@/src/components/productDetails/productDetails";
import { db } from "@/src/config/firebase";
import getItemById from "@/src/utils/getItemsById";
import { doc, getDoc } from "firebase/firestore";
import React from "react";

type props = {
  params: { id: string };
};
export default async function page({ params }: props) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  const id = params?.id;

  const { isExists, data } = await getItemById(id, "Products");

  if (!isExists) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetailsProvider>
        <ProductDetails product={data} />
      </ProductDetailsProvider>
    </div>
  );
}
