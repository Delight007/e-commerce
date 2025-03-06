"use client";
import { useState } from "react";
import { db } from "@/src/config/firebase";
import { collection, addDoc } from "firebase/firestore";

// Define Type for Product Data
type ProductData = {
  id?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  brand?: string;
  subCategory: string;
  createdAt: Date;
};

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
      "Thermocool",
      "Binatone",
      "Royal",
      "Skyrun",
    ],
    subCategories: ["Small Appliance", "Large Appliances", "Home Appliances"],
  },
  "Phone & Tablet": {
    brands: [
      "Apple",
      "Samsung",
      "OnePlus",
      "Techno",
      "Itel",
      "Xiaomi",
      "Oraimo",
      "Infinix",
    ],
    subCategories: [
      "Mobile Phones",
      "Tablets",
      "Mobile Accessories",
      "Top Smartphones",
      "Top Brandphones",
    ],
  },
  Electronics: {
    brands: ["Sony", "LG", "Bose"],
    subCategories: ["TVs", "Speakers", "Cameras"],
  },
  Fashion: {
    brands: ["Nike", "Adidas", "Gucci"],
    subCategories: ["Men", "Women", "Kids"],
  },
  Gaming: {
    brands: ["Sony", "Microsoft", "Nintendo"],
    subCategories: ["Consoles", "Games", "Accessories"],
  },
  Computing: {
    brands: ["HP", "Dell", "Apple"],
    subCategories: ["Laptops", "Desktops", "Accessories"],
  },
};

export default function UploadImage() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle category selection and reset brand & subCategory
  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setProductCategory(e.target.value);
    setProductBrand("");
    setSubCategory("");
  }

  // Handle image file selection and preview
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  // Handle price input with comma formatting
  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    let rawValue = e.target.value.replace(/,/g, ""); // Remove commas
    if (!isNaN(Number(rawValue)) && rawValue !== "") {
      setProductPrice(rawValue); // Store as raw number (string for input)
    } else {
      setProductPrice("");
    }
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !image ||
      !productName ||
      !productPrice ||
      !productCategory ||
      !subCategory ||
      !description
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ecommercer");

      // Upload image to Cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpqcoqq8r/image/upload",
        { method: "POST", body: formData }
      );

      if (!response.ok) throw new Error("Image upload failed.");

      const data = await response.json();
      const imageUrl = data.secure_url;

      const ProductDetails: ProductData = {
        name: productName,
        price: Number(productPrice.replace(/,/g, "")), // Remove commas before storing
        category: productCategory,
        brand: productBrand,
        description,
        subCategory,
        image: imageUrl,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "Products"), ProductDetails);

      alert("Product uploaded successfully!");

      // Reset form
      setProductName("");
      setProductPrice("");
      setProductCategory("");
      setProductBrand("");
      setDescription("");
      setSubCategory("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-red-500 underline">
        Upload Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row-reverse w-[700px] border bg-white rounded-lg shadow-md"
      >
        <div className="flex flex-col gap-4 p-4 flex-1 bg-gray-100 rounded-lg">
          {/* Product Name */}
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 border shadow-md rounded-md focus:outline-none"
          />

          {/* Product Price */}
          <input
            type="text"
            placeholder="Price ($)"
            value={productPrice ? Number(productPrice).toLocaleString() : ""}
            onChange={handlePriceChange}
            className="p-2 border shadow-md rounded-md focus:outline-none"
          />

          {/* Product Category */}
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

          {/* Product Brand */}
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

          {/* Product Sub-Category */}
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

          {/* Product Description */}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border shadow-md rounded-md focus:outline-none"
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 border shadow-md rounded-md focus:outline-none"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-4">
          {preview && (
            <img src={preview} className="w-40 h-40 object-cover rounded-md" />
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
          >
            {isLoading ? "Uploading..." : "Upload & Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
