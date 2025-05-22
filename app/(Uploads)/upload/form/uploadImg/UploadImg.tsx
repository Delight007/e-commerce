import { ChangeEvent } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export default function UploadFile() {
  const { extraPreviews, handleImageUpload, handleExtraImagesUpload } =
    useGlobalContext();

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleExtraImagesUpload}
        className="p-2 border shadow-md rounded-md focus:outline-none"
      />

      <div className="flex gap-2 mt-2">
        {extraPreviews.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-20 h-20 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
