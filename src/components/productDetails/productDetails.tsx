"use client";
import { useEffect } from "react";
import { Product, useProductDetailsContext } from "./components/context";
import DetailsSidebar from "./components/detailsSidebar";
import MainDetails from "./components/mainDetails";
import MainProductDetails from "./components/productDetails";
import ProductDetailsSidebar from "./components/ProductDetailsSidebar";

export default function ProductDetails({ product }: { product: Product }) {
  // const [imageLoading, setImageLoading] = React.useState(true);
  const { handleSetProduct } = useProductDetailsContext();

  useEffect(() => {
    if (product) {
      handleSetProduct(product);
    }
  }, [product]);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex lg:flex-row flex-col py-3 ">
        {/* Main Details */}
        <div className="lg:pr-2 p-0">
          <MainDetails />
        </div>

        {/* Details Sidebar */}
        <div className="lg:pl-2 p-0">
          <DetailsSidebar />
        </div>
      </div>

      {/* All Product Details, Description, Specification, Customer Feedback */}
      <div className="flex lg:flex-row flex-col my-2">
        <div className="lg:mr-2 mr-0">
          <MainProductDetails />
        </div>
        <div className="lg:ml-2 ml-0">
          <ProductDetailsSidebar />
        </div>
      </div>
    </section>
  );
}
