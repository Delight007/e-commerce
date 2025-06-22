import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Freezing", link: "#" },
    { name: "2 Door Fridges", link: "#" },
    { name: "Portable Fridge", link: "#" },
    { name: "Portable Refrigerator", link: "#" },
    { name: "Mini Fridge", link: "#" },
    { name: "Mini Refrigerator", link: "#" },
    { name: "Small Fridge", link: "#" },
    { name: "Small Frigde", link: "#" },
    { name: "Deep Freezer", link: "#" },
  ];

  const rol2 = [
    { name: "Freezer And Fridge", link: "#" },
    { name: "Deep Frezeer", link: "#" },
    { name: "Fridge And Freezer", link: "#" },
    { name: "Mini Frigde", link: "#" },
    { name: "Fridge Freezer", link: "#" },
    { name: "Refrigerator And Freezer", link: "#" },
    { name: "Small Refrigerator", link: "#" },
    { name: "Big Freezers", link: "#" },
    { name: "Freezer Refrigerator", link: "#" },
  ];

  const rol3 = [
    { name: "Deep Fry", link: "#" },
    { name: "Deep Fridge", link: "#" },
    { name: "Small Freezer", link: "#" },
    { name: "Mini Freezer", link: "#" },
    { name: "Small Deep Freezer", link: "#" },
    { name: "Mini Deep Freezer", link: "#" },
    { name: "Usb Mini Fridge", link: "#" },
    { name: "Small Fridge Freezer", link: "#" },
    { name: "Mini Fridge Freezer", link: "#" },
  ];

  const rol4 = [
    { name: "Car Freezer", link: "#" },
    { name: "Soda Fridge", link: "#" },
    { name: "Portable Freezer", link: "#" },
    { name: "Mini Generator", link: "#" },
    { name: "Small Generator", link: "#" },
    { name: "Top Mount Fridge", link: "#" },
    { name: "Hisense Single Door Fridge", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="p-3">
        <div className="border-b py-3">
          <h1 className="font-medium py-3">
            Fridges for Every Home and Office: Stay Cool and Organized
          </h1>
          <p className="text-[13px]">
            Fridges are essential appliances for every household and office,
            providing the perfect solution for preserving food, drinks, and
            perishables. Whether you're upgrading your kitchen or setting up a
            workspace, a reliable fridge keeps your items fresh and your space
            functional. At Gana, under the Home & Office category, we offer a
            wide selection of fridges tailored to meet various needs and
            budgets. From compact designs to family-sized refrigerators, you'll
            find options to suit your space and lifestyle.
          </p>

          <h3 className="font-medium py-3">
            Explore our Large Appliances & Home Improvement section to discover
            popular subcategories that make shopping seamless:
          </h3>
          <div className="text-[13px]">
            <li>
              <span className="font-medium underline">Chest Freezers:</span>{" "}
              Ideal for bulk storage, these are perfect for freezing food and
              drinks in large quantities.
            </li>
            <li>
              <span className="font-medium underline">Mini Fridges: </span>
              Compact and versatile, great for bedrooms, dorms, or small
              offices.
            </li>
            <li>
              <span className="font-medium underline">
                Double-Door Refrigerators:{" "}
              </span>
              Designed for convenience, these fridges offer ample storage for
              families or shared spaces.
            </li>
            <li>
              <span className="font-medium underline">
                Side-by-Side Refrigerators:
              </span>{" "}
              A premium choice with advanced features and spacious interiors.
            </li>
            <li>
              <span className="font-medium underline">
                Wine Coolers & Beverage Chillers:
              </span>{" "}
              Perfect for entertaining, ensuring your drinks are always served
              at the right temperature.
            </li>

            <p>
              Our range features fridges from top brands with energy-efficient
              designs and modern technologies, making them a smart choice for
              your home or office. Whether you're seeking sleek aesthetics or
              robust cooling performance, you’ll find something to match your
              needs.
            </p>
          </div>

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
