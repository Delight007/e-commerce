import { useState, ChangeEvent, FormEvent } from "react";
import { db } from "@/src/config/firebase";
import { collection, addDoc } from "firebase/firestore";
import Inputs from "./inputs/inputs";
import Select from "./select/select";
import Textarea from "./textarea/textarea";
import UploadFile from "./uploadImg/UploadImg";
import Submit from "./submit/submit";
import { useGlobalContext } from "../context/GlobalContext";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";
import ImagePreview from "@/src/components/admin/imagePreview";

// Define Type for Product Data
type ProductData = {
  id?: string;
  name: string;
  description: string;
  productDetails: string;
  keyFeatures: string[];
  specifications: Record<string, string>;
  image: string;
  extraImages: string[];
  price: number;
  prevPrice?: number;
  offPercent?: number;
  category: string;
  brand?: string;
  subCategory: string;
  createdAt: string;
  isDeal?: boolean;
  warranty?: string;
  stock: number;
};

export default function Form() {
  const {
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    productPrevPrice,
    setProductPrevPrice,
    productOffPercent,
    setProductOffPercent,
    productCategory,
    setProductCategory,
    productBrand,
    setProductBrand,
    subCategory,
    setSubCategory,
    image,
    setImage,
    extraImages,
    setExtraImages,
    description,
    setDescription,
    setPreview,
    setExtraPreviews,
    setIsLoading,
    productDetails,
    setProductDetails,
    keyFeatures,
    setKeyFeatures,
    specifications,
    setSpecifications,
    formatKeyFeatures,
    formatSpecifications,
    isDeal,
    setIsDeal,
    warranty,
    setWarranty,
    stock,
    setStock,
  } = useGlobalContext();

  // upload images to cloudinary and return its url
  async function uploadImages(image: File | null, extraImages: File[]) {
    try {
      if (!image) throw new Error("No main image selected.");

      // Upload main image
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ecommercer");

      console.log("📤 Uploading main image to Cloudinary...");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpqcoqq8r/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Main image upload failed.");

      const data = await response.json();
      console.log("📸 Cloudinary Main Image Response:", data);

      if (!data.secure_url)
        throw new Error("Main image upload failed, no url received");

      const imageUrl: string = data.secure_url || "";

      // Upload extra images in parallel
      console.log(" 📤 uploading extra images...");
      const extraImageResults = await Promise.allSettled(
        extraImages.map(async (file) => {
          const extraFormData = new FormData();
          extraFormData.append("file", file);
          extraFormData.append("upload_preset", "ecommercer");

          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dpqcoqq8r/image/upload",
            {
              method: "POST",
              body: extraFormData,
            }
          );

          const imgData = await res.json();
          console.log("🖼️ Extra Image Response:", imgData);

          if (!imgData.secure_url)
            throw new Error(`❌ Extra image upload failed: ${file.name}`);
          return imgData.secure_url as string;
        })
      );

      // Filter successful uploads
      const extraImageURLs = extraImageResults
        .filter((result) => result.status === "fulfilled")
        .map((result) => (result as PromiseFulfilledResult<string>).value);

      return { imageUrl, extraImageURLs };
    } catch (error) {
      console.error("Image upload error:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  }

  // Function to handle form submission
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      // Upload images and wait for them to finish
      const { imageUrl, extraImageURLs } = await uploadImages(
        image,
        extraImages
      );

      // Create product document in Firestore
      const ProductDetails: ProductData = {
        name: productName,
        price: Number(productPrice.replace(/,/g, "")),
        prevPrice: Number(productPrevPrice.replace(/,/g, "")),
        offPercent: Number(productOffPercent.replace(/,/g, "")),
        category: productCategory,
        brand: productBrand,
        description,
        productDetails,
        keyFeatures: formatKeyFeatures(keyFeatures.join("\n")),
        specifications: formatSpecifications(
          Object.entries(specifications)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n")
        ),
        subCategory,
        image: imageUrl,
        extraImages: extraImageURLs,
        createdAt: new Date().toISOString(),
        isDeal,
        warranty,
        stock: Number(stock.replace(/,/g, "")),
      };

      await addDoc(collection(db, "Products"), ProductDetails);
      console.log("image saved successfully:", {
        name: productName,
        image: imageUrl,
        extraImages: extraImageURLs,
      });

      alert("Product uploaded successfully!");

      // set all state back to default state
      setProductName("");
      setProductPrice("");
      setProductPrevPrice("");
      setProductOffPercent("");
      setProductCategory("");
      setProductBrand("");
      setDescription("");
      setSubCategory("");
      setProductDetails("");
      setKeyFeatures([]);
      setSpecifications({});
      setImage(null);
      setPreview(null);
      setExtraImages([]);
      setExtraPreviews([]);
      setIsDeal(false);
      setWarranty("");
      setStock("");
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="relative px-4 top-[80px]">
      <div className="py-3 flex justify-between items-center">
        <h1 className="font-semibold text-xl">Add Product</h1>
        <div className="flex items-center gap-2 justify-center text-[14px] font-semibold text-gray-400">
          <Link href="/dashboard">Gana</Link> <MdArrowRight />
          <p>Add Product</p>
        </div>
      </div>

      <div className="flex p-6  bg-white rounded-xl ">
        <div>
          <ImagePreview />
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="w-[500px] flex-1">
          <div className="flex flex-col gap-4 p-4   ">
            {/* inputs */}
            <Inputs />

            {/* select */}
            <Select />

            {/* Textarea */}
            <Textarea />
          </div>

          <div className=" flex justify-center items-center w-full px-4">
            <Submit />
          </div>
        </form>
      </div>
      <div className="w-full h-[70px] bg-white mt-3 flex justify-center items-center">
        <p className="font-semibold">
          2025 © <span className="font-blackOps">Gana</span>, All rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
