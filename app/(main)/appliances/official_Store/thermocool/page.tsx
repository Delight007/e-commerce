import ThermocoolDeals from "./category/productCategory/thermocool";
import ThermocoolCategory from "./category/thermocoolCategory";
import ImageSwiper from "./components/imageSwiper";
import ThermocoolDetails from "./components/ThermocoolDetails";
import ThermocoolSidebar from "./sideBar";
import ThermocoolProducts from "./thermocoolProducts";

export default function thermocool() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-5">
          <ImageSwiper />
        </div>
        <div className="mb-5">
          <ThermocoolDeals />
        </div>
        <div className="mb-5">
          <ThermocoolCategory />
        </div>
        <div className="flex py-3 gap-3">
          {/* Sidebar */}
          <div>
            <ThermocoolSidebar />
          </div>
          {/* mainproducts */}
          <div>
            <ThermocoolProducts />
          </div>
        </div>
        <div className="mb-5">
          <ThermocoolDetails />
        </div>
      </div>
    </section>
    // </div>
  );
}
