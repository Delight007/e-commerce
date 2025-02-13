import BasicMenu from "@/src/components/ui/dropMenu";

import { MdHelpOutline } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Link from "next/link";

const supportMenuItems = [
  { label: "Help Center", link: "/help" },
  { label: "Place an order", link: "/contact" },
  { label: "Payment option", link: "/contact" },
  { label: "Take an order", link: "/contact" },
  { label: "Cancel an order", link: "/contact" },
  { label: "Return & Refund", link: "/contact" },
];

// const faqLabel = [
//   {
//     icon: <IoChatboxEllipsesOutline />,
//     label: "Live chats",
//     link: "/Live chats",
//   },
// ];
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
