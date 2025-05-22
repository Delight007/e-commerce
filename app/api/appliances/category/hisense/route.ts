import { db } from "@/src/config/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
  Query,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const brand = "Hisense";
    if (!brand) {
      return NextResponse.json(
        { message: "Brand query parameter is required" },
        { status: 400 }
      );
    }

    let baseQuery: Query<DocumentData> = collection(db, "Products");

    // filter the query based on the names array
    baseQuery = query(baseQuery, where("brand", "==", brand), limit(10));

    const querySnapshot = await getDocs(baseQuery);
    const Products = querySnapshot.docs.map((doc) => ({
      doc: doc.id,
      data: doc.data(),
    }));

    return NextResponse.json({ Products }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch user" },
      { status: 500 }
    );
  }
}
