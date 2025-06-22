import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Cordless Vacuum", link: "#" },
    { name: "Car Hoover", link: "#" },
    { name: "Handheld Vacuum", link: "#" },
    { name: "Handheld Vacuum Cleaner", link: "#" },
    { name: "Portable Vacuum Cleaner", link: "#" },
    { name: "Bag Cleaner", link: "#" },
    { name: "Vacuum Cleaner Bags", link: "#" },
    { name: "Cordless Car Vacuum", link: "#" },
    { name: "Bagless Vacuum Cleaner", link: "#" },
  ];

  const rol2 = [
    { name: "Air Vacuum Cleaner", link: "#" },
    { name: "2 In 1 Vacuum Cleaner", link: "#" },
    { name: "Handheld Vacuum For Car", link: "#" },
    { name: "Dust Cleaner", link: "#" },
    { name: "Small Lights", link: "#" },
    { name: "Tool Cleaner", link: "#" },
    { name: "Vacuum Cleaner Filter", link: "#" },
    { name: "Small Lamps", link: "#" },
    { name: "Small Bulb", link: "#" },
  ];

  const rol3 = [
    { name: "Small Light Bulbs For Lamps", link: "#" },
    { name: "Small Light Bulbs", link: "#" },
    { name: "Ai Robot", link: "#" },
    { name: "Robot Vacuum", link: "#" },
    { name: "Robotic Vacuum", link: "#" },
    { name: "Robot Vacuum Cleaner", link: "#" },
    { name: "Robot Cleaner", link: "#" },
    { name: "Mac Mini", link: "#" },
    { name: "Cleaning Machine", link: "#" },
  ];

  const rol4 = [
    { name: "Rechargeable Vacuum", link: "#" },
    { name: "Small Generator", link: "#" },
    { name: "Usb Mini A", link: "#" },
    { name: "Mini Generator", link: "#" },
    { name: "Wet Vac", link: "#" },
    { name: "Wet Vacuum Cleaner", link: "#" },
    { name: "Water Vacuum", link: "#" },
    { name: "Mini Pc", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2">
          <h1 className="font-medium py-3">Want to buy a Vacuum cleaner?</h1>
          <p className="text-[13px]">
            We always love looking neat and tidy all the time, we wash and iron
            our clothes, giving them a new feel each time. When we are invited
            to occasions and events, we try to make known our presence by
            dressing clean, neat and decent to the venue of the occasion. The
            question is, if we invite others to our home, will they meet our
            living room clean or dirty? Beauty combined with decency equals to a
            state of perfection, and Gana is here to make that happen. Clean up
            your rugs and under lays with our Vacuum cleaning set. Rugs and
            carpets gives a home a lovely look and appearance, and they need to
            be cleaned regularly. Sweeping with a broom is stressful and it
            doesn't get the job done, but with durable home appliances like
            vacuum cleaner for car and home which come from top brands in
            various colours and sizes will give a full clean-up of all dirt and
            dusts. Just as a washing machine makes it easy to do your laundry so
            also does a vacuum cleaner ease the stress associated with cleaning
            rugs. Get a wet and dry vacuum cleaner or a car vacuum cleaner
            today.
          </p>
          <h1 className="font-medium py-3">Vacuum cleaners on Gana!</h1>
          <p className="text-[13px]">
            Get all your home appliances, vacuum cleaner for car and home with
            furniture online at Gana. Online stores are the way of the future
            for buying your Books, Mobile Phones, Electronics, Toys and more at
            the click of a button. Home decor and furniture online is just a few
            clicks away. Indulge in our affordable and unique online shopping
            experience with a huge selection authentic products and you have the
            option to pay on delivery. All our products have a warranty, so why
            not avoid all that traffic and hassle, shop at Jumia today for
            quality click of a button. Get a car vacuum cleaner to keep your car
            free from dust and dirt. Our online shop is the perfect place to get
            best prices of vacuum cleaner in Nigeria.
          </p>
        </div>
      </div>
      <div className="w-full justify-center items-center p-3 grid grid-cols-4">
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
