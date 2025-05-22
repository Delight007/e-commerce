"use client";
import React, { useEffect, useState } from "react";
import NavMenu from "./Navbar/navbar";
export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing on the server
  if (!isClient) return null;
  return (
    <>
      {" "}
      <div className="w-full fixed top-0 z-50">
        <NavMenu />
      </div>
      <div className="pt-24">{children}</div>
    </>
  );
}
