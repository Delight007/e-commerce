import { ClassNames } from "@emotion/react";
import NavMenu from "./Navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full fixed top-0 z-50">
        <NavMenu />
      </header>
      <main className="pt-24 mx-[40px]">{children}</main>
    </>
  );
}
