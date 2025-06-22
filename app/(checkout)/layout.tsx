import CheckoutNavbar from "@/src/components/checkout/navbar/checoutNav";
import { ShippingProvider } from "@/src/components/shippingform/shippingContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShippingProvider>
        <CheckoutNavbar />
        {children}
      </ShippingProvider>
    </>
  );
}
