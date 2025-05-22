import { link } from "fs";
import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Air Fryer For Ravioli", link: "#" },
    { name: "Air Fryer For Pork", link: "#" },
    { name: "Air Fryer For Apple Chips", link: "#" },
    { name: "Air Fryer For Hash Browns", link: "#" },
    { name: "Air Fryer For Avocado Fries", link: "#" },
    { name: "Air Fryer For Banana Chips", link: "#" },
    { name: "Air Fryer For Breakfast Burritos", link: "#" },
    { name: "Air Fryer For Cake", link: "#" },
    { name: "Air Fryer Meat", link: "#" },
  ];
  const rol2 = [
    { name: "Air Fryer For Tater Tots", link: "#" },
    { name: "Air Fryer For Fish Fingers", link: "#" },
    { name: "Air Fryer For Dumplings", link: "#" },
    { name: "Air Fryer For Corn Dogs", link: "#" },
    { name: "Air Fryer For Cinnamon Rolls", link: "#" },
    { name: "Air Fryer For Churros", link: "#" },
    { name: "Air Fryer For Chicken Kebabs", link: "#" },
    { name: "Air Fryer For Chicken Breasts", link: "#" },
    { name: "Air Fryer For Brownies", link: "#" },
  ];

  const rol3 = [
    { name: "Air Fryer For Shrimp", link: "#" },
    { name: "Air Fryer For Tofu", link: "#" },
    { name: "Air Fryer For Toasting Bread", link: "#" },
    { name: "Air Fryer For Steak", link: "#" },
    { name: "Air Fryer For Spring Rolls", link: "#" },
    { name: "Air Fryer For Sausage", link: "#" },
    { name: "Air Fryer For Roasted Vegetables", link: "#" },
    { name: "Air Fryer For Rice", link: "#" },
    { name: "Air Fryer For Meatballs", link: "#" },
  ];

  const rol4 = [
    { name: "Air Fryer Veg", link: "#" },
    { name: "Air Fryer For Meat", link: "#" },
    { name: "Air Fryer For Fish Fillets", link: "#" },
    { name: "Air Fryer For Veggie Burgers", link: "#" },
    { name: "Air Fryer For Waffles", link: "#" },
    { name: "Air Fryer For Cookies", link: "#" },
    { name: "Air Fryer For BreadAir Fryer For Bacon", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2 gap-4">
          <div className="gap-4">
            <h1 className="font-medium mb-4">Deep fryer Online</h1>
            <p className="text-[13px] mb-4">
              At Jumia, we have a collection of deep fryer from top brands like
              masterchef, Saisho, Binatone, Mikachi, Eurosonic & more. The LG
              deep fryers will be a great addition to your kitchen appliances
              for they have great features and will add a soft touch to your
              kitchen decor. It comes with timer and alarm that makes a beep
              sound when the food is well fried as well as an automated device
              that enables you filter the oil and prevent the crumbs from
              entering into the oil so it can be used later. Our deep fryer
              prices are the best in Nigeria so ensure you shop with us. The
              deep fryers available on Jumia will enable you fry large amount of
              food at a time using only minimal amount of oil. There is an
              adjustable thermostat and temperature light to control amount of
              heat and intensity of the frying. The fryer will make sure the
              food is fried properly without getting burnt or leave some
              uncooked.
            </p>
          </div>
          <div className="gap-4">
            <h1 className="font-medium mb-4">Authentic deep fryer at Jumia</h1>
            <p className="text-[13px] mb-4">
              Jumia ensures you have the best when it comes to kitchen
              appliances from trusted brands. The appliances are reliable,
              authentic, stylishly designed and durable. Our Deep fryers are
              well-designed with soft hand grips that are comfortable for you to
              hold and carry about. It comes with an adjustable thermostat and
              temperature that prevents the food from becoming overcooked and
              reduces the smoky odour that comes out from the oil. Get Jumia's
              portable electrical heating appliance that comes with a non-stick
              inner bowl, automatic lid release and cord storage just to mention
              a few and get your desired best fries for your family and guests.
              Having the deep fryers in your kitchen will enable you enjoy
              delicious fries whenever you want.
            </p>
          </div>
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
