import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Toaster Sandwich", link: "#" },
    { name: "Small Oven For Baking", link: "#" },
    { name: "Oven For Baking", link: "#" },
    { name: "Baking Kit", link: "#" },
    { name: "Baking Ovens", link: "#" },
    { name: "Mini Oven Baking", link: "#" },
    { name: "Bread Oven", link: "#" },
    { name: "Bread Toaster", link: "#" },
    { name: "Sandwich Maker", link: "#" },
  ];

  const rol2 = [
    { name: "Mac Mini", link: "#" },
    { name: "Toaster Machine", link: "#" },
    { name: "Toasting Machine", link: "#" },
    { name: "Grill Toaster", link: "#" },
    { name: "Oven And Grill", link: "#" },
    { name: "Grill Kit", link: "#" },
    { name: "Oven Grill", link: "#" },
    { name: "Grilling Oven", link: "#" },
    { name: "Mini Grill", link: "#" },
  ];

  const rol3 = [
    { name: "4 Slice Toaster", link: "#" },
    { name: "Bread Maker", link: "#" },
    { name: "Small Convection Oven", link: "#" },
    { name: "Convection Oven", link: "#" },
    { name: "Mini Oven With Hob", link: "#" },
    { name: "Electric Baking Oven", link: "#" },
    { name: "Electric Oven For Baking", link: "#" },
    { name: "Bread Machine", link: "#" },
    { name: "Cooker Oven", link: "#" },
  ];

  const rol4 = [
    { name: "Mini Cooker", link: "#" },
    { name: "Cooker With Oven", link: "#" },
    { name: "Portable Oven", link: "#" },
    { name: "Gas With Oven", link: "#" },
    { name: "Mini Gas Oven", link: "#" },
    { name: "Oven Gas", link: "#" },
    { name: "Gas Oven", link: "#" },
    { name: "Gas Burner With Oven", link: "#" },
  ];

  return (
    <div className="bg-white w-full p-3">
      <div className=" p-1 border-b">
        <div className="py-3">
          <h1 className="font-medium pb-3">
            Where to buy Sandwich Makers & Toasters Online?
          </h1>
          <p className="text-[13px]">
            Get Sandwich Makers and Toasters online at the click of the button
            on Gana to enjoy a delicious taste of yummy sandwich and crisp toast
            bread. Toast and sandwich is ideal for early morning breakfast at
            home, office or takes to school meals for the kids. Whether you need
            the vegetable sandwich or crisp toasts, explore and find your
            favourite top brands of sandwich makers and toasters at Gana to
            treat your mouth to delicious morning snack. The small appliances
            are perfect for your kitchen counter and are energy efficient to
            give you your desire well-shaped slice of toast bread. Order for the
            small appliances on Gana and enjoy perfect and durable home
            appliances.
          </p>
        </div>
        <div className="py-3">
          <h1 className="pb-3 font-medium">
            Sandwich Makers & Toasters on Gana
          </h1>
          <p className="text-[13px]">
            Discover electric sandwich makers and toasters at Gana Nigeria that
            comes with various styles and attractive colourful designs. Relax
            whilst reading with the sandwich or crisp butter toasts and enjoy
            every bit of munching. It is ideal to take with tea, coffee or
            cereals in the morning before going to the office or for your
            children school meals. Choose from the various smooth sleek body
            finishing that comes in various shapes and models to brighten up
            your kitchen decor. Whether is the deep pocket grills with lock lid
            or the automatic pop up, we have varieties from Russell Hobbs,
            Binatone, Saisho, Kenwood, Master Chef and more for you to make your
            choice. Get Sandwich Makers and Toasting machine at Gana Nigeria
            that comes with great features and power capacity to give you
            mouth-watering well-sliced brown toasts and sandwich.
          </p>
        </div>
      </div>
      <div className="w-full justify-center items-center p-2 grid grid-cols-4">
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
