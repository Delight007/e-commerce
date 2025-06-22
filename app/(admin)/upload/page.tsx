"use client";

import GlobalProvider from "./context/GlobalContext";
import Form from "./form/form";

export default function UploadImage() {
  return (
    <div>
      <div>
        <GlobalProvider>
          <Form />
        </GlobalProvider>
      </div>
    </div>
  );
}
