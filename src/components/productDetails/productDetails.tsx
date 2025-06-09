"use client";
import Image from "next/image";
import React from "react";
import MainDetails from "./components/mainDetails";
import DetailsSidebar from "./components/detailsSidebar";
import MainProductDetails from "./components/productDetails";
import ProductDetailsSidebar from "./components/ProductDetailsSidebar";

export default function ProductDetails({ product }: { product: any }) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div>
      <div className="flex py-3 ">
        {/* Main Details */}
        <div className="pr-2">
          <MainDetails product={product} />
        </div>

        {/* Details Sidebar */}
        <div className="pl-2">
          <DetailsSidebar />
        </div>
      </div>

      {/* All Product Details, Description, Specification, Customer Feedback */}
      <div className="flex">
        <div className="mr-2">
          <MainProductDetails product={product} />
        </div>
        <div className="ml-2">
          <ProductDetailsSidebar />
        </div>
      </div>
    </div>
  );
}
