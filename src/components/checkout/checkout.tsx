"use client";

import { useShipping } from "@/src/components/shippingform/shippingContext";
import { usePaystackPayment } from "@/src/components/usePaystackPayment/usePaystack";
import { useCartStore } from "@/src/utils/cart";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "@/src/config/firebase";
import { GiConfirmed } from "react-icons/gi";
import { useCheckout } from "../hooks/useCheckoutHooks";
import ShippingFeeUpdater from "./shippingFeeUpdater";
// import ShippingFeeUpdater from "@/src/components/ShippingFeeUpdater";

const CheckoutPage = () => {
  const { shippingInfo } = useShipping();
  const items = useCartStore((state) => state.items);
  const { fee } = useCheckout();
  const { shippingFee, doorDelivery } = fee;
  const { initializePayment } = usePaystackPayment();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const add =
    shippingInfo?.deliveryMethod === "Pick Up"
      ? total + shippingFee
      : shippingInfo?.deliveryMethod === "Delivery"
      ? total + doorDelivery
      : total;

  const totalToPay = add;

  const handlePayment = () => {
    if (!shippingInfo?.email) {
      alert("Email is required for payment.");
      return;
    }

    const reference = uuidv4();

    initializePayment({
      email: shippingInfo.email,
      amount: totalToPay,
      reference,
      onSuccess: async (response) => {
        const user = auth.currentUser;
        const order = {
          userId: user?.uid || null,
          shippingInfo,
          items,
          total,
          totalToPay,
          paymentRef: response.reference,
          status: "Ongoing",
          createdAt: Timestamp.now(),
        };

        try {
          await addDoc(collection(db, "orders"), order);
          alert("Payment successful! Order saved.");
        } catch (error) {
          console.error("❌ Failed to save order:", error);
          alert("Payment succeeded, but saving the order failed.");
        }
      },
      onClose: () => {
        console.log("❌ Payment cancelled by user");
      },
    });
  };

  return (
    <>
      {shippingInfo?.state && shippingInfo?.city && (
        <ShippingFeeUpdater
          selectedState={shippingInfo.state}
          selectedCity={shippingInfo.city}
        />
      )}

      <div className="mx-10 flex gap-4 mt-3 ">
        {/* Shipping Info */}
        <div className="mb-4 bg-white w-[872px] rounded-md">
          <div className="p-2 border-b flex justify-between items-center">
            <div className="flex gap-2">
              <GiConfirmed className="text-lg text-red-500" />
              <h3 className="uppercase font-bold text-[12px]">
                Customer Address:
              </h3>
            </div>
            <span className="text-blue-500 text-sm hover:underline">
              Change
            </span>
          </div>
          {shippingInfo ? (
            <div className="px-2 py-4">
              <p className="text-sm">
                {shippingInfo.firstName} {shippingInfo.lastName}
              </p>
              <div className="text-gray-500 text-sm mt-2">
                <p>
                  {shippingInfo.address} | {shippingInfo.state} -{" "}
                  {shippingInfo.city} | {shippingInfo.phone}
                </p>
                <p className="mt-1">
                  Delivery Method:{" "}
                  <span className="font-medium">
                    {shippingInfo.deliveryMethod}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-red-500">No shipping information provided.</p>
          )}
        </div>

        {/* Cart Items Summary */}
        <div className="bg-white w-[298px] rounded-md ">
          <h3 className="font-bold text-sm p-2 border-b">Order Summary:</h3>

          <div className="flex justify-between items-center p-2 text-sm">
            <p>
              Item's Total ({totalQuantity > 0 && <span>{totalQuantity}</span>})
            </p>
            <p className="font-semibold">₦ {total.toLocaleString()}</p>
          </div>

          {shippingInfo?.deliveryMethod === "Pick Up" && (
            <div className="flex justify-between items-center p-2 text-sm">
              <p>Shipping Fee</p>
              <p className="font-semibold">₦ {shippingFee.toLocaleString()}</p>
            </div>
          )}

          {shippingInfo?.deliveryMethod === "Delivery" && (
            <div className="flex justify-between items-center p-2 text-sm">
              <p>Delivery Fee</p>
              <p className="font-semibold">₦ {doorDelivery.toLocaleString()}</p>
            </div>
          )}

          <div className="flex justify-between items-center p-2 text-sm border-t mt-2">
            <p className="font-bold">Total to Pay</p>
            <p className="font-bold text-red-500">
              ₦ {totalToPay.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-center ">
            <button
              onClick={handlePayment}
              className="bg-red-500 text-white px-3 py-2 text-[12px] font-bold rounded-md mt-6 hover:bg-red-600 transition mb-2"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
