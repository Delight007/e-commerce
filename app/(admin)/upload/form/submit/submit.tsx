import { useGlobalContext } from "../../context/GlobalContext";

export default function Submit() {
  const { isLoading, preview } = useGlobalContext();
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="bg-red-500 text-white font-semibold hover:bg-red-600 w-full  px-4 py-2 border rounded-md shadow-md"
    >
      {isLoading ? "Uploading..." : "Submit"}
    </button>
  );
}
