import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Hisense Air Conditioners", link: "#" },
    { name: "Hisense Store Deals", link: "#" },
    { name: "Hisense Android TV", link: "#" },
    { name: "Hisense Water Dispenser", link: "#" },
    { name: "Hisense Washing Machine 5kg", link: "#" },
    { name: "Hisense Washing Machine 10kg", link: "#" },
    { name: "Hisense Uled Tv", link: "#" },
    { name: "Hisense Tv Remote Control", link: "#" },
    { name: "Hisense Tv Remote", link: "#" },
    { name: "Hisense Tv 40 Inches", link: "#" },
  ];

  const rol2 = [
    { name: "Hisense Top Loader Washing Machine", link: "#" },
    { name: "Hisense Standing Ac", link: "#" },
    { name: "Hisense Split Ac", link: "#" },
    { name: "Hisense Sound System", link: "#" },
    { name: "Hisense Single Door Fridge", link: "#" },
    { name: "Hisense Remote Control", link: "#" },
    { name: "Hisense Microwave 20l", link: "#" },
    { name: "Hisense Led Tv", link: "#" },
    { name: "Hisense Inverter Air Conditioner", link: "#" },
    { name: "Hisense Home Theater", link: "#" },
  ];

  const rol3 = [
    { name: "Hisense Fridge With Dispenser", link: "#" },
    { name: "Hisense Fridge Freezer", link: "#" },
    { name: "Hisense Fridge Double Door", link: "#" },
    { name: "Hisense Fridge And Freezer", link: "#" },
    { name: "Hisense Double Door Refrigerator", link: "#" },
    { name: "Hisense Double Door Fridge", link: "#" },
    { name: "Hisense Automatic Washing Machine", link: "#" },
    { name: "Hisense 8kg Washing Machine", link: "#" },
    { name: "Hisense 5kg Washing Machine", link: "#" },
    { name: "Hisense 4k Smart TV", link: "#" },
  ];

  const rol4 = [
    { name: "Hisense 43 Smart TV", link: "#" },
    { name: "Hisense 2HP Air Conditioner", link: "#" },
    { name: "Hisense 10kg Washing Machine", link: "#" },
    { name: "Hisense Microwave", link: "#" },
    { name: "Hisense 1.5Hp", link: "#" },
    { name: "Hisense Washing Machine", link: "#" },
    { name: "Hisense Side By Side Refrigerator", link: "#" },
    { name: "Hisense Refrigerator", link: "#" },
    { name: "Hisense Freezer", link: "#" },
    { name: "Hisense Double Door Fridge Ref 215Dr", link: "#" },
  ];

  return (
    <div className="w-full  bg-white px-4">
      <div className="border-b py-3 ">
        <h2 className="text-xl font-medium">
          Welcome to the Hisense Official Store on Gana Nigeria - Your
          Destination for Authentic and Affordable Electronics
        </h2>
        <p className="text-[12px] py-3">
          Are you in search of genuine Hisense products at the best prices? Good
          news for you! The Hisense Official Store on gaNa Nigeria is your
          one-stop destination for all your electronics and home appliance
          needs. With a wide range of high-quality products, fast delivery, free
          returns, and various payment options, we guarantee a seamless shopping
          experience.
        </p>
        <h2 className="text-xl font-medium">
          Shop Online for Original Hisense Products
        </h2>
        <p className="text-[12px] py-3">
          At the Hisense Official Store on gaNa online, you can explore a vast
          collection of authentic Hisense products. From cutting-edge smart LED
          TVs to innovative home appliances like wash machines, fridges &
          freezers, air conditioners, and more. We have everything you need in
          the store. Rest assured that when you shop with us, you'll receive
          only genuine and original Hisense items that guarantee peace of mind.
        </p>
        <h2 className="text-xl font-medium">
          Buy Authentic Hisense at Affordable Prices on Gana
        </h2>
        <p className="text-[12px] py-3">
          We understand the importance of affordability, which is why we offer
          the best prices for Hisense products in Nigeria. We strive to make
          your shopping experience worthwhile by providing the best prices
          without compromising on quality. With our range of affordable options,
          you can enjoy top-notch electronics without breaking the bank.
          Discover the perfect balance of quality and affordability at the
          Hisense Official Store on gaNa Nigeria today.
        </p>

        <h2 className="text-xl font-medium">
          Enjoy Fast Delivery, Free Returns, and Secure Payment Options
        </h2>
        <p className="text-[12px] py-3">
          We value your time and convenience, which is why we prioritize fast
          and reliable delivery. Once you place your order, our dedicated team
          will ensure your orders are swiftly delivered to your doorstep.
          Additionally, we offer free returns, allowing you to return ordered
          items within 15 days of purchase. We understand that everyone has
          unique payment preferences, so we provide secure online and offline
          payment options to cater to your needs.
        </p>

        <p className="text-[12px] py-3">
          Experience the authenticity, affordability, and convenience of
          shopping at the Hisense Official Store on Gana Nigeria. Shop Now!
        </p>
      </div>
      <div className="w-full justify-center items-center py-3 grid grid-cols-4">
        <div className=" ">
          {rol1.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className="">
          {rol2.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className=" ">
          {rol3.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
        <div className=" ">
          {rol4.map((rol) => (
            <h4 className="text-[12px] w-full underline font-medium cursor-pointer py-2">
              {rol.name}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
