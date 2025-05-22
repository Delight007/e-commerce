// import { useContext } from "react";
import { GlobalContext, useGlobalContext } from "../../context/GlobalContext";

export default function Textarea() {
  const {
    productDetails,
    setProductDetails,
    keyFeatures,
    setKeyFeatures,
    specifications,
    setSpecifications,
    description,
    setDescription,
    formatKeyFeatures,
    formatSpecifications,
  } = useGlobalContext();

  return (
    <div className="flex flex-col gap-4">
      {/* Description */}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />

      {/* Product Details */}
      <textarea
        placeholder="Enter product details"
        value={productDetails}
        onChange={(e) => setProductDetails(e.target.value)}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />

      {/* Key Features (Stored as an Array) */}
      <textarea
        placeholder="Enter key features (one per line)"
        value={keyFeatures.join("\n")}
        onChange={(e) => {
          setKeyFeatures(formatKeyFeatures(e.target.value));
        }}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />

      {/* Specifications (Stored as an Object) */}
      <textarea
        placeholder="Enter specifications (format: Key: Value per line)"
        value={Object.entries(specifications)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")}
        onChange={(e) => {
          setSpecifications(formatSpecifications(e.target.value));
        }}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />
    </div>
  );
}
