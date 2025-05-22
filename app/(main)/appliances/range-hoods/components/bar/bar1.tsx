import SortMenu from "@/src/components/ui/sortMenu";

export default function RangeBar1({
  totalProducts,
}: {
  totalProducts: number | null;
}) {
  return (
    <div className="px-[16px] flex gap-2 relative  justify-between">
      <div className="flex">
        <h1 className="text-xl font-semibold py-[16px] ">Range Hoods</h1>
        <p className="flex justify-center items-center text-sm text-gray-500 ml-8">
          ({totalProducts} products found)
        </p>
      </div>
      <label className="flex justify-center items-center ">
        <span className="w-[200px] p-2">
          <SortMenu />
        </span>
      </label>
    </div>
  );
}
