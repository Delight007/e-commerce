// app/api/updateOrderStatus/route.ts
import { NextResponse } from "next/server";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/src/config/firebase";

export async function POST(req: Request) {
  try {
    const { orderId, status } = await req.json();

    if (!orderId || !status) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const orderRef = doc(db, "orders", orderId);
    await updateDoc(orderRef, { status });

    return NextResponse.json({ message: "Order status updated" });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
