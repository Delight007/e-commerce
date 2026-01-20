import { db } from "@/src/config/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID missing" }, { status: 400 });
    }

    const q = query(
      collection(db, "orders"),
      where("userId", "==", userId),
      limit(1)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return NextResponse.json({ shippingInfo: null });
    }

    return NextResponse.json(snapshot.docs[0].data());
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
