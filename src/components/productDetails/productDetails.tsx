"use client";
import Image from "next/image";
import React from "react";
import MainDetails from "./components/mainDetails";
import DetailsSidebar from "./components/detailsSidebar";

export default function ProductDetails({ product }: { product: any }) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  return (
    <div>
      <div className="flex py-3  gap-4">
        {/* Main Details */}
        <div>
          <MainDetails product={product} />
        </div>

        {/* Details Sidebar */}
        <div>
          <DetailsSidebar />
        </div>
      </div>
    </div>
  );
}
