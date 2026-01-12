// "use client";
// import BasicMenu from "@/src/components/ui/dropMenu";
// import { auth } from "@/src/config/firebase";
// import { useCartStore } from "@/src/utils/cart";
// import { signOut } from "firebase/auth";
// import Link from "next/link";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa6";
// import { LuInbox } from "react-icons/lu";
// import { RiUserFollowLine } from "react-icons/ri";

// const accountMenuItems = [
//   { icon: <FaRegUser />, label: "My Account", link: "/account" },
//   { icon: <LuInbox />, label: "Orders", link: "/order" },
//   { icon: <FaRegHeart />, label: "Wishlist", link: "/wishlist" },
// ];

// export default function AccountMenu() {
//   const [user] = useAuthState(auth);
//   const clearCart = useCartStore((state) => state.clearCart);
//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       clearCart(user?.uid); // Clear cart on sign out
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   const spanButton = user ? (
//     <span
//       onClick={handleSignOut}
//       className="flex justify-center items-center gap-2 text-white w-full h-full"
//     >
//       Logout
//     </span>
//   ) : (
//     <Link href="/login" className="flex justify-center items-center gap-2">
//       Sign in
//     </Link>
//   );
//   const icon = user ? <RiUserFollowLine /> : <FaRegUser />;

//   return (
//     <BasicMenu
//       buttonText={
//         user
//           ? ` ${user.displayName?.split(" ")[0] || user.email?.split("@")[0]}`
//           : "Account"
//       }
//       buttonIcon={<FaRegUser />}
//       menuItems={accountMenuItems}
//       spanButton={spanButton}
//     />
//   );
// }

"use client";
import BasicMenu from "@/src/components/ui/dropMenu";
import { auth } from "@/src/config/firebase";
import { useCartStore } from "@/src/utils/cart";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { RiUserFollowLine } from "react-icons/ri";

const accountMenuItems = [
  { icon: <FaRegUser />, label: "My Account", link: "/account" },
  { icon: <LuInbox />, label: "Orders", link: "/order" },
  { icon: <FaRegHeart />, label: "Wishlist", link: "/wishlist" },
];

export default function AccountMenu() {
  const [user] = useAuthState(auth);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleLogout = async () => {
    clearCart(user?.uid); // clear cart on logout
    await signOut(auth);
  };

  return (
    <BasicMenu
      buttonText={
        user
          ? user.displayName?.split(" ")[0] ||
            user.email?.split("@")[0] ||
            "Account"
          : "Account"
      }
      buttonIcon={user ? <RiUserFollowLine /> : <FaRegUser />}
      menuItems={accountMenuItems}
      actionButton={
        user ? { type: "logout", onClick: handleLogout } : { type: "login" }
      }
    />
  );
}
