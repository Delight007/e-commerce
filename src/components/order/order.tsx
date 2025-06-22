import React from "react";
import OrderProduct from "./orderProduct/orderProduct";
import OrderSidebar from "./sidebar/orderSidebar";

export default function Order() {
  return (
    <div className="flex gap-2">
      <div>
        <OrderSidebar />
      </div>
      <div>
        <OrderProduct />
      </div>
    </div>
  );
}
