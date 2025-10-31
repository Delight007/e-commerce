import BinatoneProducts from "./binatoneProducts";
import Binatone from "./category/ProductCategory/binatone";
import BinatoneDetails from "./components/binatoneDetails";
import ImageSwiper from "./components/ImageSwiper";
import BinatoneSidebar from "./sidebar";

export default function binatone() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-5">
          <ImageSwiper />
        </div>
        <div className="mb-5">
          <Binatone />
        </div>
        <div className="flex py-3 gap-3">
          {/* Sidebar */}
          <div>
            <BinatoneSidebar />
          </div>

          {/* main Products */}
          <div>
            <BinatoneProducts />
          </div>
        </div>
        {/* Binatone Products General Details */}
        <div className="mb-5">
          <BinatoneDetails />
        </div>
      </div>
    </section>
    // </div>
  );
}
