import SortMenu from "@/src/components/ui/sortMenu";

export default function RoyalBar1({
  totalProducts,
}: {
  totalProducts: number | null;
}) {
  return (
    <div className="px-[16px] flex gap-2 relative ">
      <h1 className="text-xl font-semibold py-[16px] ">Royal Official Store</h1>
      <p className="flex justify-center items-center text-sm text-gray-500">
        ( {totalProducts} products found)
      </p>
      <label className="flex justify-center items-center  ml-52 ">
        <span className="w-[200px] p-2">
          <SortMenu />
        </span>
      </label>
    </div>
  );
}
