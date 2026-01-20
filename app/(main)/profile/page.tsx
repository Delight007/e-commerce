import Account from "@/src/components/profile/profile";
import ProtectedRoute from "@/src/components/shared/protectRoute";

export default function page() {
  return (
    <ProtectedRoute>
      <Account />
    </ProtectedRoute>
  );
}
