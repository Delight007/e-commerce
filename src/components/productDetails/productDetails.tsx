"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import MainDetails from "./components/mainDetails";
import DetailsSidebar from "./components/detailsSidebar";
import MainProductDetails from "./components/productDetails";
import ProductDetailsSidebar from "./components/ProductDetailsSidebar";
import { Product, useProductDetailsContext } from "./components/context";

export default function ProductDetails({ product }: { product: Product }) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  const { handleSetProduct } = useProductDetailsContext();

  useEffect(() => {
    if (product) {
      handleSetProduct(product);
    }
  }, [product]);
  return (
    <div>
      <div className="flex py-3 ">
        {/* Main Details */}
        <div className="pr-2">
          <MainDetails />
        </div>

        {/* Details Sidebar */}
        <div className="pl-2">
          <DetailsSidebar />
        </div>
      </div>

      {/* All Product Details, Description, Specification, Customer Feedback */}
      <div className="flex">
        <div className="mr-2">
          <MainProductDetails />
        </div>
        <div className="ml-2">
          <ProductDetailsSidebar />
        </div>
      </div>
    </div>
  );
}
