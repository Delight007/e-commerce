import RangeProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
import RangeSidebar from "./sidebar";

export default function page() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <RangeSidebar />
          </div>

          {/* main products */}
          <div>
            <RangeProducts />
          </div>
        </div>
        <div>
          <MoreProducts />
        </div>
      </div>
    </section>
    // </div>
  );
}
