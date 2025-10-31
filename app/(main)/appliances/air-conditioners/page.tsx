import ACProducts from "./mainProducts";
import MoreProducts from "./moreProducts";
import ACsidebar from "./sidebar";

export default function airConditioners() {
  return (
    <section className="mx-auto px-6 lg:px-12 max-w-7xl">
      <div>
        <div className="w-full flex  flex-col-reverse lg:flex-row py-3 gap-3 ">
          {/* sidebar */}
          <div>
            <ACsidebar />
          </div>

          {/* main products */}
          <div className=" mt-4 sm:mt-0 ">
            <ACProducts />
          </div>
        </div>
        <div className="w-full">
          <MoreProducts />
        </div>
      </div>
    </section>
  );
}
