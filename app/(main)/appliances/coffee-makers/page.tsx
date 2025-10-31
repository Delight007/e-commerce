import CoffeeMakerProducts from "./mainProducts";
import MoreCoffeeProducts from "./moreProducts";
import CoffeeMakerSidebar from "./sidebar";

export default function page() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="w-full flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <CoffeeMakerSidebar />
          </div>

          {/* main products */}
          <div>
            <CoffeeMakerProducts />
          </div>
        </div>
        <div className="w-full">
          <MoreCoffeeProducts />
        </div>
      </div>
    </section>
    // </div>
  );
}
