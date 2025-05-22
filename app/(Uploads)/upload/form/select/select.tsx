import { ChangeEvent } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

// Define category-wise brand and subcategories
const categoryData: Record<
  string,
  { brands: string[]; subCategories: string[] }
> = {
  Appliances: {
    brands: [
      "Hisense",
      "Ecoflow",
      "Nexus",
      "HaierThermocool",
      "Binatone",
      "Royal",
      "Glamstar",
      "Duravolt",
      "Skyrun",
      "Miratec",
      "Itel",
      "Century",
      "Boscon",
      "lwin",
      "Lontor",
      "Syinix",
      "Silver Crest",
      "Philips",
      "LG",
      "Gourmet",
      "Master Chef",
      "Sweet Home",
      "Polystar",
      "RAF",
      "Pinnacle",
      "Scarlett",
      "TIMBUTUS",
      "Arctic",
      "Beldrey",
      "Easy Home",
      "Deewoo",
      "Mythco",
      "Nine",
      "Golden Diamond",
      "Ariston",
      "Eurosonic",
      "Scanfrost",
    ],
    subCategories: ["Small Appliance", "Large Appliances", "Home Appliances"],
  },
  "Phone & Tablet": {
    brands: ["Apple", "Samsung", "OnePlus", "Techno", "Itel", "Xiaomi"],
    subCategories: ["Mobile Phones", "Tablets", "Mobile Accessories"],
  },
  Electronics: {
    brands: ["Sony", "LG", "Bose"],
    subCategories: ["TVs", "Speakers", "Cameras"],
  },
  Fashion: {
    brands: ["Nike", "Adidas", "Gucci"],
    subCategories: ["Men", "Women", "Kids"],
  },
};
export default function Select() {
  const {
    productCategory,
    setProductCategory,
    productBrand,
    setProductBrand,
    subCategory,
    setSubCategory,
  } = useGlobalContext();

  // Function to handle category change
  function handleCategoryChange(e: ChangeEvent<HTMLSelectElement>) {
    setProductCategory(e.target.value);
    setProductBrand("");
    setSubCategory("");
  }
  return (
    <div className="flex flex-col gap-2">
      <select
        value={productCategory}
        onChange={handleCategoryChange}
        className="p-2 border shadow-md rounded-md focus:outline-none cursor-pointer"
      >
        <option value="">Select Category</option>
        {Object.keys(categoryData).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={productBrand}
        onChange={(e) => setProductBrand(e.target.value)}
        className="p-2 border shadow-md rounded-md focus:outline-none cursor-pointer"
        disabled={!productCategory}
      >
        <option value="">Select Brand</option>
        {productCategory &&
          categoryData[productCategory]?.brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
      </select>

      <select
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
        className="p-2 border shadow-md rounded-md focus:outline-none cursor-pointer"
        disabled={!productCategory}
      >
        <option value="">Select Sub-Category</option>
        {productCategory &&
          categoryData[productCategory]?.subCategories.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
      </select>
    </div>
  );
}
