import FoodProcessorProducts from "./mainProduct";
import MoreProducts from "./moreProducts";
import FoodProcessorSidebar from "./sidebar";

export default function FoodProcessor() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <FoodProcessorSidebar />
          </div>

          {/* main products */}
          <div>
            <FoodProcessorProducts />
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
