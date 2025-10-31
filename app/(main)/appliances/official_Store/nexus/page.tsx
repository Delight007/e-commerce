import NexusCategory from "./category/category";
import ImageSwipper from "./components/imageSwiper";
import MoreProducts from "./moreProducts";
import NexusProducts from "./nexusProducts";
import NexusSidebar from "./sidebar";

export default function nexus() {
  return (
    // <div className="w-full">
    <section className="w-full">
      <div className="mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-5">
          <ImageSwipper />
        </div>
        <div className="mb-5">
          <NexusCategory />
        </div>
        <div className="flex py-3 gap-3">
          {/* sidebar */}
          <div>
            <NexusSidebar />
          </div>
          <div>
            <NexusProducts />
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
