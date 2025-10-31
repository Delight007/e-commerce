import ImageSwipper from "./components/Swiper/imageSwipper";
import EcoflowProducts from "./ecoflowProducts";
import EcoflowSidebar from "./sidebar";
export default function ecoflow() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-5">
          <ImageSwipper />
        </div>
        <div className="flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <EcoflowSidebar />
          </div>
          <div>
            <EcoflowProducts />
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
}
