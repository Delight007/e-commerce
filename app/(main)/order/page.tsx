import Order from "@/src/components/order/order";
import ProtectedRoute from "@/src/components/shared/protectRoute";

export default function page() {
  return (
    <ProtectedRoute>
      <Order />
    </ProtectedRoute>
  );
}
