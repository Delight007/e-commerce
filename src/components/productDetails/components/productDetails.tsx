import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function MainProductDetails({ product }: { product: any }) {
  const specs = product.specifications as
    | Record<string, string | number>
    | undefined;
  return (
    <div className="w-[872px] ">
      <div className="bg-white w-full h-auto rounded-md ">
        <div className="w-full h-[52px] py-2 border-b flex items-center">
          <h2 className="font-medium text-lg py-1 px-4">Product details</h2>
        </div>
        <div className="px-4 py-2">
          <p className="text-[14px] text-gray-600">
            {product.productDetails || "No description available."}
          </p>
        </div>
      </div>
      <div className="bg-white w-full h-auto rounded-md mt-4">
        <div className="w-full h-[52px] py-2 border-b flex items-center">
          <h2 className="font-medium text-lg py-1 px-4">Specification</h2>
        </div>
        <div className="p-2 flex gap-2">
          <article className="w-[428px] p-2">
            <div className=" border rounded-md ">
              <h2 className="font-medium text-sm uppercase p-4">
                key features
              </h2>
              <div className="text-[14px] text-gray-600 p-4 border-t">
                {Array.isArray(product.keyFeatures) &&
                product.keyFeatures.length > 0 ? (
                  <ul className="px-4 list-disc space-y-1">
                    {product.keyFeatures.map(
                      (feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="px-4">No description available.</p>
                )}
              </div>
            </div>
          </article>
          <article className="w-[428px] p-2">
            <div className=" border rounded-md ">
              <h2 className="font-medium text-sm uppercase p-4">
                Specification
              </h2>
              <div className="text-[14px] text-gray-600 p-4 border-t">
                {specs ? (
                  <ul className="px-4 list-disc space-y-1">
                    {Object.entries(specs).map(([key, value], index) => (
                      <li key={index}>
                        <strong>{key}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4">No specification available.</p>
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className=" bg-white w-full h-auto rounded-md mt-4  mb-9">
        <div className="w-full h-[52px] py-2 border-b flex items-center justify-between">
          <h2 className="font-medium text-lg py-1 px-4">
            Verified Customer Feedback
          </h2>
          <span className="mr-5 text-red-500 flex gap-1">
            See all
            <MdArrowForwardIos className=" pt-[6px] text-xl" />
          </span>
        </div>
        <div className="px-4 py-2"></div>
      </div>
    </div>
  );
}
