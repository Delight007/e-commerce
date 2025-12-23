"use client";
import BasicMenu from "@/src/components/ui/dropMenu";
import { auth } from "@/src/config/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
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

  const spanButton = user ? (
    <span
      onClick={() => signOut(auth)}
      className="flex justify-center items-center gap-2 text-white w-full h-full"
    >
      Logout
    </span>
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
          ? ` ${user.displayName?.split(" ")[0] || user.email?.split("@")[0]}`
          : "Account"
      }
      buttonIcon={<FaRegUser />}
      menuItems={accountMenuItems}
      spanButton={spanButton}
    />
  );
}
