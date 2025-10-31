import MainPhonesProducts from "./allProducts/products";
import PhonesSidebar from "./allProducts/sidebar/phonesSidebar";

export default function PhoneProducts() {
  return (
    <div className="flex flex-col-reverse lg:flex-row py-3 gap-3">
      {/* sidebar */}
      <div>
        <PhonesSidebar />
      </div>

      {/* Products */}
      <div className="mt-4 sm:mt-0">
        <MainPhonesProducts />
      </div>
    </div>
  );
}
