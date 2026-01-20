import CheckoutNavbar from "@/src/components/checkout/navbar/checoutNav";
import ProtectedRoute from "@/src/components/shared/protectRoute";
import { ShippingProvider } from "@/src/components/shippingform/shippingContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShippingProvider>
        <ProtectedRoute>
          <CheckoutNavbar />
          {children}
        </ProtectedRoute>
      </ShippingProvider>
    </>
  );
}
