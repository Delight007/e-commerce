import React from "react";
import NavMenu from "./Navbar/navbar";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
