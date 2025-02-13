import { FaRegUser } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import BasicMenu from "@/src/components/ui/dropMenu";
import Link from "next/link";

const accountMenuItems = [
  { icon: <FaRegUser />, label: "My Account", link: "/account" },
  { icon: <LuInbox />, label: "Orders", link: "/orders" },
  { icon: <FaRegHeart />, label: "Wishlist", link: "/wishlist" },
];

export default function AccountMenu() {
  return (
    <BasicMenu
      buttonText="Account"
      buttonIcon={<FaRegUser />}
      menuItems={accountMenuItems}
      spanButton={
        <Link
          href="/Live chats"
          className="flex justify-center items-center gap-2"
        >
          sign in
        </Link>
      }
    />
  );
}
