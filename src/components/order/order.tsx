import OrderProduct from "./orderProduct/orderProduct";
import OrderSidebar from "./sidebar/orderSidebar";

export default function Order() {
  return (
    <section className="flex  flex-col-reverse lg:flex-row gap-3 mt-[30px] pb-3 border-b-0  mx-auto px-6 lg:px-12 max-w-7xl">
      <div className="w-full lg:w-auto">
        <OrderSidebar />
      </div>
      <div className="w-full lg:w-auto">
        <OrderProduct />
      </div>
    </section>
  );
}
