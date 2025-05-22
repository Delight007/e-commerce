import { useGlobalContext } from "../../context/GlobalContext";

export default function Inputs() {
  const {
    productName,
    setProductName,
    productPrice,
    productPrevPrice,
    productOffPercent,
    handlePriceChange,
    handlePreviousPriceChange,
    handleOffPercentChange,
    isDeal,
    setIsDeal,
  } = useGlobalContext();
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="p-2 border w-full shadow-md rounded-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="Price ($)"
        value={productPrice ? Number(productPrice).toLocaleString() : ""}
        onChange={handlePriceChange}
        className="p-2 border w-full shadow-md rounded-md focus:outline-none"
      />
      <input
        type="text"
        placeholder="Previous Price ($)"
        value={
          productPrevPrice ? Number(productPrevPrice).toLocaleString() : ""
        }
        onChange={handlePreviousPriceChange}
        className="p-2 border w-full shadow-md rounded-md focus:outline-none"
      />
      <input
        type="number"
        placeholder="Discount Percentage"
        value={productOffPercent}
        onChange={handleOffPercentChange}
        className="p-2 border w-full shadow-md rounded-md focus:outline-none"
      />

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          // value={isDeal}
          checked={isDeal}
          onChange={(e) => setIsDeal(e.target.checked)}
          className="w-[15px] h-[15px] border-2 border-gray-300 rounded-lg"
        />
        <span className="text-red-500 text-[14px]">Mark as Deal Product!!</span>
      </label>
    </div>
  );
}
