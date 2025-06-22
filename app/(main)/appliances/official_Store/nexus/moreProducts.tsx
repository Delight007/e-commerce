import React from "react";

export default function MoreProducts() {
  const rol1 = [
    { name: "Nexus Store Deals", link: "#" },
    { name: "Nexus Automatic Washing Machine", link: "#" },
    { name: "Nexus 4 Burner Gas Cooker", link: "#" },
  ];

  const rol2 = [
    { name: "Nexus Gas Cooker", link: "#" },
    { name: "Nexus Fridge", link: "#" },
    { name: "Nexus Freezer", link: "#" },
  ];

  const rol3 = [
    { name: "Nexus Double Door Fridge", link: "#" },
    { name: "Nexus Chest Freezer", link: "#" },
    { name: "Nexus Bedside Fridge", link: "#" },
  ];

  const rol4 = [
    { name: "Nexus 4.5KG Washing Machine", link: "#" },
    { name: "Nexus Official Store", link: "#" },
  ];

  return (
    <div className="w-full  bg-white px-4">
      <div className="border-b py-3 ">
        <h2 className="text-xl font-medium">
          Experience Authenticity and Affordability at the Official Nexus Store
          on Gana Nigeria
        </h2>
        <p className="text-[12px] py-3">
          The Nexus Official Store on gaNa Nigeria is your home for authentic
          appliances. Explore our carefully assorted collection of high-quality
          home and office appliances and electronics designed to enhance your
          home and elevate your daily routines. From kitchen essentials like
          fridges to home electronics like rechargeable fans and air
          conditioners, Nexus offers reliable solutions that combine
          performance, durability, and affordability.
        </p>
        <h2 className="text-xl font-medium">
          Buy Original and Affordable Nexus Appliances
        </h2>
        <p className="text-[12px] py-3">
          Here at gaNa Nigeria, we prioritize authenticity and affordability and
          that is why all our products on the Nexus Store are sourced directly
          from the brand, to ensure that you receive original appliances that
          meet high-quality standards. We are committed to providing our
          customers with the best prices, making Nexus appliances accessible to
          a wide range of budgets. Shop with confidence, knowing that you are
          investing in reliable products that offer excellent value for money
          and warranty.
        </p>
        <h2 className="text-xl font-medium">
          Frequently Asked Questions (FAQs)
        </h2>
        <h2 className="text-[14px] py-3">
          Are the products sold on the store original and authentic?
        </h2>
        <p className="text-[12px]">
          Yes, all products available are 100% authentic. We have a strong
          partnership with Nexus, ensuring that only appliances directly sourced
          from the brand are sold on the official store.
        </p>

        <h2 className="text-[14px] font-normal">
          Are Nexus Products Affordable?
        </h2>
        <p className="text-[12px] py-3">
          The appliances sold are one of the most affordable in the market and
          on gaNa, you buy them at lesser prices than most. We believe that
          quality should be accessible to everyone.
        </p>

        <h2 className="text-[14px] font-normal">
          What are the delivery options, return policy, and payment methods
          available?
        </h2>
        <p className="text-[12px] py-3">
          We offer various delivery options to ensure your products reach you in
          a timely manner. You can either choose doorstep delivery or pick up at
          the nearest pick-up station to you. We also provide a hassle-free
          return policy for your peace of mind. Regarding payments, gaNa Nigeria
          offers multiple methods, including cash on delivery, bank transfers,
          and secure online and offline payments.
        </p>
        <p className="text-[12px]">
          Shop online with confidence at the official Nexus Store on Jumia
          Nigeria and experience the authenticity, affordability, and
          reliability of Nexus appliances. Explore a wide range of genuine
          products that enhance your lifestyle. Enjoy fast and convenient
          delivery, hassle-free returns, and secure payment options. Upgrade
          your home and office appliances, Shop now!
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
