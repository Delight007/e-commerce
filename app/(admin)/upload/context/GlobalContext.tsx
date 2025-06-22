import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

// what context should contain
export type GlobalContextType = {
  productName: string;
  setProductName: (name: string) => void;
  productPrice: string;
  setProductPrice: (price: string) => void;
  productPrevPrice: string;
  setProductPrevPrice: (price: string) => void;
  productOffPercent: string;
  setProductOffPercent: (percent: string) => void;
  productCategory: string;
  setProductCategory: (category: string) => void;
  productBrand: string;
  setProductBrand: (brand: string) => void;
  subCategory: string;
  setSubCategory: (category: string) => void;
  image: File | null;
  setImage: (file: File | null) => void;
  extraImages: File[];
  setExtraImages: (files: File[]) => void;
  description: string;
  setDescription: (desc: string) => void;
  preview: string | null;
  setPreview: (preview: string | null) => void;
  extraPreviews: string[];
  setExtraPreviews: (previews: string[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  isDeal: boolean;
  setIsDeal: (deal: boolean) => void;
  productDetails: string;
  setProductDetails: (details: string) => void;
  keyFeatures: string[];
  setKeyFeatures: (features: string[]) => void;
  specifications: Record<string, string>;
  setSpecifications: (specs: Record<string, string>) => void;
  handlePriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePreviousPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOffPercentChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleStockChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formatKeyFeatures: (features: string) => string[];
  formatSpecifications: (specs: string) => Record<string, string>;
  uploadedImageUrl: string | null;
  setUploadedImageUrl: (url: string | null) => void;
  uploadedExtraImages: string[];
  setUploadedExtraImages: (urls: string[]) => void;
  handleImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExtraImagesUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  warranty: string;
  setWarranty: (warranty: string) => void;
  stock: string;
  setStock: (stock: string) => void;
};

// create context
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// simplify context use & allow easy acces to global context
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}

// GlobalProvider component
export default function GlobalProvider({ children }: { children: ReactNode }) {
  // Global state variables
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productPrevPrice, setProductPrevPrice] = useState<string>("");
  const [productOffPercent, setProductOffPercent] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productBrand, setProductBrand] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [extraImages, setExtraImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [extraPreviews, setExtraPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<string>("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [uploadedExtraImages, setUploadedExtraImages] = useState<string[]>([]);
  const [specifications, setSpecifications] = useState<Record<string, string>>(
    {}
  );
  const [isDeal, setIsDeal] = useState<boolean>(false);
  const [warranty, setWarranty] = useState<string>("");
  const [stock, setStock] = useState<string>("");

  // Function to handle price change
  function handlePriceChange(e: ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue)) && rawValue !== "") {
      setProductPrice(rawValue);
    } else {
      setProductPrice("");
    }
  }

  // Function to handle previous price change
  function handlePreviousPriceChange(e: ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue)) && rawValue !== "") {
      setProductPrevPrice(rawValue);
    } else {
      setProductPrevPrice("");
    }
  }

  // Function to handle percentage change
  function handleOffPercentChange(e: ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue)) && rawValue != "") {
      setProductOffPercent(rawValue);
    } else {
      setProductOffPercent("");
    }
  }

  // Function to handle stock change
  function handleStockChange(e: ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue)) && rawValue != "") {
      setStock(rawValue);
    } else {
      setStock("");
    }
  }

  // Function to format key features
  function formatKeyFeatures(features: string) {
    return features
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  }

  // function that format  specifications
  function formatSpecifications(specs: string) {
    const formattedSpecs: Record<string, string> = {};
    specs.split("\n").forEach((line) => {
      const [key, value] = line.split(":").map((item) => item.trim());
      if (key && value) {
        formattedSpecs[key] = value;
      }
    });
    return formattedSpecs;
  }

  // Function to handle image upload
  function handleImageUpload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("no file selected:");
      return;
    }
    console.log("selected file:", file);
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  // Function to handle extra images upload
  function handleExtraImagesUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      console.log("no extra file selected");
      return;
    }
    const files = Array.from(e.target.files);
    console.log("extra files: ", files);
    setExtraImages([...extraImages, ...files]);
    setExtraPreviews([
      ...extraPreviews,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  }
  return (
    <GlobalContext.Provider
      value={{
        isDeal,
        setIsDeal,
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
        preview,
        setPreview,
        extraPreviews,
        setExtraPreviews,
        isLoading,
        setIsLoading,
        productDetails,
        setProductDetails,
        keyFeatures,
        setKeyFeatures,
        specifications,
        uploadedImageUrl,
        setUploadedImageUrl,
        uploadedExtraImages,
        setUploadedExtraImages,

        setSpecifications,
        handlePriceChange,
        handlePreviousPriceChange,
        handleOffPercentChange,
        formatKeyFeatures,
        formatSpecifications,
        handleImageUpload,
        handleExtraImagesUpload,
        warranty,
        setWarranty,
        stock,
        setStock,
        handleStockChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
