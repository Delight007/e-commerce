"use client";
import { FaRegUser } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import BasicMenu from "@/src/components/ui/dropMenu";
import Link from "next/link";
import { auth } from "@/src/config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { RiUserFollowLine } from "react-icons/ri";

const accountMenuItems = [
  { icon: <FaRegUser />, label: "My Account", link: "/account" },
  { icon: <LuInbox />, label: "Orders", link: "/order" },
  { icon: <FaRegHeart />, label: "Wishlist", link: "/wishlist" },
];

export default function AccountMenu() {
  const [user] = useAuthState(auth);

  const spanButton = user ? (
    <button
      onClick={() => signOut(auth)}
      className="flex justify-center items-center gap-2 text-white w-full h-full"
    >
      Logout
    </button>
  ) : (
    <Link href="/login" className="flex justify-center items-center gap-2">
      Sign in
    </Link>
  );
  const icon = user ? <RiUserFollowLine /> : <FaRegUser />;

  return (
    <BasicMenu
      buttonText={
        user
          ? `Hi, ${
              user.displayName?.split(" ")[0] || user.email?.split("@")[0]
            }`
          : "Account"
      }
      buttonIcon={<FaRegUser />}
      menuItems={accountMenuItems}
      spanButton={spanButton}
    />
  );
}
