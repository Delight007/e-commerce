import OrderSidebar from "../shared/userSidebar";
import AccountOverview from "./profileDetails";

export default function Account() {
  return (
    <section className="flex  flex-col-reverse lg:flex-row gap-3 mt-[30px] pb-3 border-b-0  mx-auto px-6 lg:px-12 max-w-7xl">
      <div className="w-full lg:w-auto">
        <OrderSidebar />
      </div>
      <div className="w-full lg:w-auto">
        <AccountOverview />
      </div>
    </section>
  );
}
