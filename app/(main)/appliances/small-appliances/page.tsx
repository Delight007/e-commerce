import CategoryWrapperSmall from "./category/categoryWrapper";
import SmallDeals from "./category/deals/smallDeals";
import SmallAppliancesProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
import SmallAppliancesSidebar from "./sidebar";

export default function SmallAppliances() {
  return (
    <div>
      <div className="my-5">
        <CategoryWrapperSmall />
      </div>
      <div className="my-5">
        <SmallDeals />
      </div>
      <div className="w-full flex py-3 gap-3">
        {/* sidebar */}
        <div>
          <SmallAppliancesSidebar />
        </div>

        {/* main products */}
        <div>
          <SmallAppliancesProducts />
        </div>
      </div>
      <div className="w-full">
        <MoreProducts />
      </div>
    </div>
  );
}
