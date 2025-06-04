import NavMenu from "./Navbar/navbar";
import { CssBaseline, Fab } from "@mui/material";
import ScrollTop from "./appliances/air-conditioners/components/scrollTop";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <CssBaseline /> */}
      <header className="w-full fixed top-0 z-50">
        <NavMenu />
      </header>

      {/* Scroll anchor for Back to Top */}
      <div id="back-to-top-anchor" className="pt-[0]" />

      {/* Main content area with padding to avoid overlap with fixed header */}
      <main className="pt-24 mx-[40px]">{children}</main>

      {/* Scroll to top button */}
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <MdKeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </>
  );
}
