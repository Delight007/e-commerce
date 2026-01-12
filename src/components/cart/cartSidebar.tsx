import Link from "next/link";

export default function CartSidebar({ total }: { total: number }) {
  return (
    <div className="bg-white lg:w-[296px] w-full h-auto">
      <div className="border-b">
        <h1 className="p-2 text-sm font-medium">CART SUMMARY</h1>
      </div>
      <div className="border-b flex justify-between items-center p-2">
        <p className="font-medium text-sm">Subtotal </p>
        <p className="font-semibold text-lg">₦ {total.toLocaleString()}</p>
      </div>
      <div className="p-2 w-full h-[55px] flex items-center justify-center">
        <Link
          href="/shipping_form"
          className=" bg-red-500 shadow-md shadow-gray-400  transition-colors duration-300 hover:bg-red-600 text-sm font-medium w-full h-[40px] p-2 rounded-md text-center text-white"
        >
          CheckOut (₦ {total.toLocaleString()})
        </Link>
      </div>
    </div>
  );
}
