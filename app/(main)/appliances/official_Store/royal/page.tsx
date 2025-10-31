import Royal from "./components/category/ProductCategory/royal";
import RoyalProducts from "./royalProducts";
import RoyalSidebar from "./sidebar";

export default function royal() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        {/* category */}
        <div className="mb-5">
          <Royal />
        </div>

        <div className="mb-5 flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <RoyalSidebar />
          </div>

          {/* main products */}
          <div>
            <RoyalProducts />
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
}
