import BasicMenu from "@/src/components/ui/dropMenu";

import Link from "next/link";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";

const supportMenuItems = [
  { label: "Help Center", link: "/help" },
  { label: "Place an order", link: "/contact" },
  { label: "Payment option", link: "/contact" },
  { label: "Take an order", link: "/contact" },
  { label: "Cancel an order", link: "/contact" },
  { label: "Return & Refund", link: "/contact" },
];

export default function SupportMenu() {
  return (
    <BasicMenu
      buttonText="Support"
      buttonIcon={<MdHelpOutline />}
      menuItems={supportMenuItems}
      spanButton={
        <Link
          href="/Live chats"
          className="flex justify-center items-center gap-4"
        >
          <IoChatboxEllipsesOutline className="text-xl font-bold" />
          Live chats
        </Link>
      }
    />
  );
}
