import SortMenu from "@/src/components/ui/sortMenu";

export default function BarTop({
  totalProducts,
}: {
  totalProducts: number | null;
}) {
  return (
    <div className="px-4 flex flex-wrap items-center justify-between gap-2">
      {/* --- Left Section: Title & Count --- */}
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-lg md:text-xl font-semibold">
          Large Appliances | Pay on Delivery
        </h1>

        <p className="text-sm text-gray-500">
          ({totalProducts ?? 0} product{totalProducts === 1 ? "" : "s"} found)
        </p>
      </div>

      {/* --- Right Section: Sort Menu --- */}
      <div className="flex items-center">
        <label className="flex items-center text-sm text-gray-700">
          <span className="mr-2 hidden sm:inline">Sort by:</span>
          <div className="w-auto sm:w-[200px]">
            <SortMenu />
          </div>
        </label>
      </div>
    </div>
  );
}
