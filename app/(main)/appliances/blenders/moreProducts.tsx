import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Ai Robot", link: "#" },
    { name: "Hand Blenders", link: "#" },
    { name: "Countertop Blenders", link: "#" },
    { name: "Hand Whisk", link: "#" },
    { name: "Pet Food", link: "#" },
    { name: "Food Blender", link: "#" },
    { name: "Portable Blender", link: "#" },
    { name: "Portable Blenders", link: "#" },
    { name: "Electric Hand Mixer", link: "#" },
    { name: "Robotic Hand", link: "#" },
  ];
  const rol2 = [
    { name: "Juice Blenders", link: "#" },
    { name: "Hand Blender", link: "#" },
    { name: "Mini Grinder", link: "#" },
    { name: "Crushers", link: "#" },
    { name: "Electric Grinder", link: "#" },
    { name: "Little Live Pets", link: "#" },
    { name: "Crest Blender", link: "#" },
    { name: "Silver Crest Blender", link: "#" },
    { name: "Food Blenders", link: "#" },
  ];

  const rol3 = [
    { name: "Mini Juicer", link: "#" },
    { name: "Kitchen Hand Blender", link: "#" },
    { name: "Blender Grinder", link: "#" },
    { name: "Blender And Grinder", link: "#" },
    { name: "Electric Hand Blender", link: "#" },
    { name: "Mixer Grinder", link: "#" },
    { name: "Blender Cup", link: "#" },
    { name: "Silver Blenders", link: "#" },
    { name: "Hand Juicer", link: "#" },
  ];

  const rol4 = [
    { name: "Juicer Blender", link: "#" },
    { name: "Grinder", link: "#" },
    { name: "Grinder And Blender", link: "#" },
    { name: "Electric Hand Whisk", link: "#" },
    { name: "Hand Mixer", link: "#" },
    { name: "Hand Mix", link: "#" },
    { name: "hand mixers", link: "#" },
  ];

  return (
    <div className="w-full  bg-white">
      <div className="w-full p-3 ">
        <div className="w-full  border-b pb-2">
          <div>
            <h2 className="font-medium">
              Blenders: Your Kitchen's New Best Friend
            </h2>
            <div className="py-1 text-sm">
              Looking to elevate your culinary game? A blender is the perfect
              tool to whip up everything from smoothies and soups to sauces and
              dips. Whether you're a seasoned chef or a budding home cook, a
              high-quality blender can make your life easier and your meals more
              delicious.
            </div>
          </div>
          <div>
            <h2 className="font-medium">Explore Our Range of Blenders</h2>
            <span className="py-1 text-sm">
              {" "}
              At Jumia, we offer a wide range of blenders to suit every need and
              budget. From powerful professional-grade models to compact
              personal blenders, you're sure to find the perfect blender for
              your kitchen.
            </span>
            <div className="py-1">
              <p className="text-sm">
                <span className="font-medium underline text-sm">
                  High-Speed Blenders
                </span>
                : Ideal for crushing ice, pureeing fruits and vegetables, and
                making nut butters.
              </p>
              <p className="text-sm">
                <span className="font-medium underline text-sm">
                  Immersion Blenders
                </span>
                : Perfect for blending soups, sauces, and smoothies directly in
                pots and pans. Wall Ovens: Perfect for baking, roasting, and
                grilling, our wall ovens offer precise temperature control and
                even heat distribution.
              </p>
              <p className="text-sm">
                <span className="font-medium underline text-sm">
                  Personal Blenders
                </span>
                : Compact and portable, perfect for on-the-go blending.
              </p>
            </div>
          </div>
          <div className="py-1">
            <h2 className="font-medium">Why Choose a Blender?</h2>
            <div className="gap-3">
              {" "}
              <p className="text-[13px]">Save Time and Effort</p>
              <p className="text-[13px]">
                Blenders can quickly and easily prepare a variety of dishes.
              </p>
              <p className="text-[13px]"> Healthy Eating</p>
              <p className="text-[13px]">
                {" "}
                Blenders make it easy to incorporate more fruits, vegetables,
                and other healthy ingredients into your diet.
              </p>
              <p className="text-[13px]"> Versatile</p>
              <p className="text-[13px]">
                {" "}
                Blenders can be used for a wide range of culinary tasks.
              </p>
              <p className="text-[13px]">Ready to Upgrade Your Kitchen?</p>
              <p className="text-[13px]">
                Browse our collection of blenders today and discover the perfect
                one for you. With gana, you can shop with confidence and enjoy
                fast, reliable delivery.
              </p>
            </div>
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
