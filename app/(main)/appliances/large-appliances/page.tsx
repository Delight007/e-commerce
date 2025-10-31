import CategoryWrapperSmall from "./category/categoryWrapper";
import SmallAppliancesProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
import SmallAppliancesSidebar from "./sidebar";

export default function SmallAppliances() {
  return (
    // <div>
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="my-5">
          <CategoryWrapperSmall />
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
    </section>
    // </div>
  );
}
