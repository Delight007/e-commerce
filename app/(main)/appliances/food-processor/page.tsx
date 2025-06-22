import FoodProcessorProducts from "./mainProduct";
import MoreProducts from "./moreProducts";
import FoodProcessorSidebar from "./sidebar";

export default function FoodProcessor() {
  return (
    <div className="w-full">
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
  );
}
