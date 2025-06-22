import React, { useEffect, useState } from "react";
import { LiaGiftSolid, LiaHandsSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { useProductDetailsContext } from "../../context";
import deliveryRates from "@/src/utils/delivery";
import Progress from "@/src/components/ui/loading";

export default function Delivery() {
  const { selectedCity, selectedState, doorDelivery, shippingFee } =
    useProductDetailsContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [selectedCity, selectedState]);

  return (
    <section>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[100px]">
          <Progress />
        </div>
      ) : (
        <div>
          {/* Pickup Station */}
          <article className="flex py-1">
            <div className="border p-2 h-[40px] relative">
              <LiaGiftSolid className="z-100 text-lg absolute top-0 right-[11px] mt-[2px]" />
              <LiaHandsSolid className="text-2xl z-10 mt-[2px]" />
            </div>
            <div className="flex-1 ml-2">
              <div className="flex">
                <h2 className="font-medium text-base">Pickup Station</h2>
                <button className="text-blue-500 hover:underline text-sm ml-[70px]">
                  Details
                </button>
              </div>
              <p className="text-[12px] pt-1">
                Delivery Fees: ₦{shippingFee.toLocaleString()}
              </p>
              <p className="text-[12px] pt-1 leading-4">
                Ready for delivery between 12 June and 16 June if you place your
                order within the next 3hrs 21mins
              </p>
            </div>
          </article>

          {/* Door Delivery */}
          <article className="flex py-1">
            <div className="border p-2 h-[40px] relative">
              <TbTruckDelivery className="text-2xl" />
            </div>
            <div className="flex-1 ml-2">
              <div className="flex">
                <h2 className="font-medium text-base">Door Delivery</h2>
                <button className="text-blue-500 hover:underline text-sm ml-[70px]">
                  Details
                </button>
              </div>
              <p className="text-[12px] pt-1">
                Delivery Fees: ₦{doorDelivery.toLocaleString()}
              </p>
              <p className="text-[12px] pt-1 leading-tight">
                Ready for delivery between 12 June and 16 June if you place your
                order within the next 3hrs 21mins
              </p>
            </div>
          </article>

          {/* Return Policy */}
          <article className="flex py-1">
            <div className="border p-2 h-[40px] relative">
              <BsArrowCounterclockwise className="text-2xl" />
            </div>
            <div className="flex-1 ml-2">
              <div className="flex">
                <h2 className="font-medium text-base">Return Policy</h2>
              </div>
              <p className="text-[12px] pt-1 leading-tight">
                Free return within 7 days for ALL eligible items
                <span className="text-blue-500 hover:underline ml-2">
                  Details
                </span>
              </p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
