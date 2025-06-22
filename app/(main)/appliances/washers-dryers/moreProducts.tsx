import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Mac Mini", link: "#" },
    { name: "Mini Dryer", link: "#" },
    { name: "Mini Washing Machine", link: "#" },
    { name: "Washing Machine Small", link: "#" },
    { name: "Small Washing Machine", link: "#" },
    { name: "Washing Machine Portable", link: "#" },
    { name: "Foldable Washing Machine", link: "#" },
    { name: "Portable Dryer", link: "#" },
    { name: "Portable Washing Machine", link: "#" },
  ];

  const rol2 = [
    { name: "Mini Washer", link: "#" },
    { name: "Mini Washer And Dryer", link: "#" },
    { name: "Dryer Hose", link: "#" },
    { name: "Washing Machine Drain Hose", link: "#" },
    { name: "Portable Washer", link: "#" },
    { name: "Hand Washing Machine", link: "#" },
    { name: "Mini Portable Washing Machine", link: "#" },
    { name: "Portable Mini Washing Machine", link: "#" },
    { name: "Small Portable Washing Machine", link: "#" },
  ];

  const rol3 = [
    { name: "Washing Machine Clothes", link: "#" },
    { name: "Washing Clothes Machine", link: "#" },
    { name: "Cloth Dryer", link: "#" },
    { name: "Clothes Dryer", link: "#" },
    { name: "Office Fridge", link: "#" },
    { name: "Fridge", link: "#" },
    { name: "Refrigerator", link: "#" },
    { name: "Big Generators", link: "#" },
    { name: "Big Bear", link: "#" },
  ];

  const rol4 = [
    { name: "Drum Dryer", link: "#" },
    { name: "Washing Machine Twin Tub", link: "#" },
    { name: "Fruit Dryer", link: "#" },
    { name: "Cleaning Machine", link: "#" },
    { name: "Machine Plate", link: "#" },
    { name: "Ironing Machine", link: "#" },
    { name: "Hisense Washing Machine", link: "#" },
    { name: "Washing Machine Hisense", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3">
            Where to Buy Washing Machines & Dryers Online?
          </h1>
          <p className="text-[13px]">
            Here at Gana we have a wide range of cool home appliances online
            that provide you with an effective and efficient way of doing your
            laundry and can make all the difference in your everyday living.
            That’s why the top loader washing machines to the front loader
            washing machine type are designed to make everyday laundry easier,
            by being of a high standard and quality, providing guaranteed
            convenience and affordability. To top it all off, Gana offers
            premium quality washing machines and dryers that are
            well-diversified to suit all your needs. The level of efficiency in
            this home appliance is incredible as it would wash it faster and you
            are sure to get a very clean output once done. When you use a
            washer, you save yourself a lot of stress and time while you also
            consume less energy in the process. Get the best washer and dryer
            like the Nexus 4.5KG washing machine when you buy washing machine in
            Nigeria on Gana. We have the best washing machine for your laundry
            business.
          </p>
          <h1 className="font-medium py-3">Washing Machines on Gana Nigeria</h1>
          <p className="text-[13px]">
            Washing and drying clothes are very important when it comes to your
            personal hygiene. This is the reason why you need to buy washing
            machine in Nigeria on Gana. With modern technology, the equipment
            can be as quiet as possible with less vibrations. We have a large
            selection of top loaders washing machine on Gana like the LG washing
            machine for you to choose from. We have a selection of tested and
            trusted brands such as Samsung, Haier Thermocool Washing Machines,
            Ignis, Scanfrost, Icegate, LG washing machines and much more. We
            have got something that fits into everyone’s taste like the washing
            machine and tumble dryers and the washing machine and dryer combined
            together to take away stress, it’s all just a few clicks away.
            Indulge in our affordable and unique online shopping experience with
            a huge selection and you only have to pay on delivery. All our
            products have a warranty, so why not avoid all that traffic and
            hassle, shop at Gana today for quality home appliances with home
            delivery. Wondering how much is washing machine? No need, just come
            to our online shop, we offer best prices.
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
