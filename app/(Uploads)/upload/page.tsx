"use client";
import { useState } from "react";
import { db } from "@/src/config/firebase";
import { collection, addDoc } from "firebase/firestore";

type productData = {
  id?: string;
  name: string;
  image: string;
  price: number;
  category: string;
  brand: string;
};

export default function UploadImage() {
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productCategory, setProductCategory] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle image file selection and preview
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    // Show preview before upload
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  // Handle form submission and image upload
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !image ||
      !productName ||
      productPrice <= 0 ||
      !productCategory ||
      !productBrand
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setIsLoading(true); // Set loading state to true while the image is being uploaded

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ecommercer"); // Set Cloudinary preset

      // Send image to Cloudinary for upload
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpqcoqq8r/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      const imageUrl = data.secure_url;

      console.log("Image URL:", imageUrl);

      // Check if imageUrl exists
      if (imageUrl) {
        const ProductDetails = {
          name: productName,
          price: productPrice,
          category: productCategory,
          brand: productBrand,
          image: imageUrl,
          createdAt: new Date(),
        };
        await addDoc(collection(db, "Products"), ProductDetails);

        alert("Product uploaded successfully!");

        // Reset fields after successful upload
        setProductName("");
        setProductPrice(0);
        setProductCategory("");
        setProductBrand("");
        setImage(null);
        setPreview(null);
      } else {
        console.error("Failed to get the image URL from Cloudinary.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Upload Product</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus: outline-none"
        />

        {/* Product Price */}
        <input
          type="number"
          placeholder="Price ($)"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md focus: outline-noney"
        />

        {/* Product Category */}
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Category</option>
          <option value="Appliances">Appliances</option>
          <option value="Phone & Tablet">Phone & Tablet</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Computing">Computing</option>
          <option value="Gaming">Gaming</option>
          <option value="Baby Products">Baby Products</option>
        </select>

        {/* Product Brand */}
        <input
          type="text"
          placeholder="Brand Name"
          value={productBrand}
          onChange={(e) => setProductBrand(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus: outline-none"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-2 border border-gray-300 rounded-md focus: outline-none"
        />

        {/* Image Preview */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-md"
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          {isLoading ? "Uploading..." : "Upload & Save"}
        </button>
      </form>
    </div>
  );
}
