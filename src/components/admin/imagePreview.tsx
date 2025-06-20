"use client";

import { useGlobalContext } from "@/app/(admin)/upload/context/GlobalContext";
import Image from "next/image";
import { useRef } from "react";
import { MdEdit } from "react-icons/md";

export default function ImagePreview() {
  const { preview, extraPreviews, handleImageUpload, handleExtraImagesUpload } =
    useGlobalContext();

  // Refs to trigger the file inputs
  const mainInputRef = useRef<HTMLInputElement>(null);
  const extraInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[315px] flex flex-col items-center">
      {/* Main Preview */}
      <div className="relative border w-[290px] h-[290px] border-gray-400 rounded-lg flex justify-center items-center overflow-hidden">
        {preview ? (
          <Image
            src={preview}
            className="w-full h-full object-cover rounded-md"
            alt="main"
            width={290}
            height={290}
          />
        ) : (
          <span className="text-gray-300 text-xs">Empty</span>
        )}

        {/* Main Upload Pencil */}
        <button
          type="button"
          onClick={() => mainInputRef.current?.click()}
          className="absolute top-2 right-2 p-1 bg-white border rounded-full shadow hover:bg-gray-100"
          title="Upload main image"
        >
          <MdEdit className="text-xl text-gray-600" />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={mainInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Extra Images Grid */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="relative border w-[80px] h-[80px] border-gray-400 flex items-center justify-center rounded-md overflow-hidden"
          >
            {extraPreviews[index] ? (
              <Image
                src={extraPreviews[index]}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                alt={`extraImage`}
              />
            ) : (
              <span className="text-gray-300 text-xs">Empty</span>
            )}

            {/* Upload pencil for extra images (same input for all) */}
            {index === 0 && (
              <>
                <button
                  type="button"
                  onClick={() => extraInputRef.current?.click()}
                  className="absolute top-1 right-1 p-1 bg-white border rounded-full shadow hover:bg-gray-100"
                  title="Upload extra images"
                >
                  <MdEdit className="text-base text-gray-600" />
                </button>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  ref={extraInputRef}
                  onChange={handleExtraImagesUpload}
                  className="hidden"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
