"use client";

import GlobalProvider from "./context/GlobalContext";
import Form from "./form/form";

export default function UploadImage() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center my-6">
      <h1 className="text-2xl font-bold mb-4 text-red-500 underline">
        Upload Product
      </h1>
      <div>
        <GlobalProvider>
          <Form />
        </GlobalProvider>
      </div>
    </div>
  );
}
