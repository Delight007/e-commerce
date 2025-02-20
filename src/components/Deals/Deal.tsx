import Image from "next/image";
import React from "react";

export default function Deals() {
  return (
    <div className=" w-[145px] h-[199px] flex flex-rows gap-2 py-1 px-2">
      <div className="p-1 text-center font-thin">
        <Image
          width={180}
          height={180}
          src="/images/electronics.png"
          alt="electronics"
        />
        <span className="text-sm">Tv & Audio Deals</span>
      </div>
      <div className="p-1 text-center">
        <Image width={180} height={180} src="/images/7.gif" alt="gif1" />
        <span className="text-sm">New Arrival</span>
      </div>
      <div className="p-1 text-center">
        <Image
          width={180}
          height={180}
          src="/images/clearance.png"
          alt="clearance"
        />
        <span className="text-sm">Up to 80% off</span>
      </div>
      <div className="p-1 text-center">
        <Image width={180} height={180} src="/images/phones.png" alt="phones" />
        <span className="text-sm">Phone & Tablets Deals</span>
      </div>
      <div className="p-1 text-center">
        <Image
          width={180}
          height={180}
          src="/images/appliances.png"
          alt="appliances"
        />
        <span className="text-sm">Appliances Deals</span>
      </div>
      <div className="p-1 text-center">
        <Image
          width={180}
          height={180}
          src="/images/fashion.png"
          alt="fashion"
        />
        <span className="text-sm">Fashion Deals</span>
      </div>
    </div>
  );
}
