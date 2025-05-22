import { useGlobalContext } from "../../context/GlobalContext";

export default function Submit() {
  const { isLoading, preview } = useGlobalContext();
  return (
    <div>
      {preview && (
        <img src={preview} className="w-40 h-40 object-cover rounded-md" />
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-white text-red-500 w-[250px] px-4 py-2 border rounded-md shadow-md"
      >
        {isLoading ? "Uploading..." : "Upload & Save"}
      </button>
    </div>
  );
}
