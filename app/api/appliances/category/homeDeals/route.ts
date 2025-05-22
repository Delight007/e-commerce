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
    const name = [
      "Fridge",
      "Freezer",
      "Washers",
      "fans",
      "Air Conditioners",
      "Dehumidifiers",
      "Humidifiers",
      "Kettles",
      "Stabilizer",
      "Water Dispensers",
    ];
    if (!name) {
      return NextResponse.json(
        { message: "Name query parameter is required" },
        { status: 400 }
      );
    }

    let baseQuery: Query<DocumentData> = collection(db, "Products");

    // Filter the query based on the names array
    baseQuery = query(
      baseQuery,
      where("name", "in", name),
      where("isDeal", "==", true),
      limit(16)
    );

    const querySnapshot = await getDocs(baseQuery);
    const Products = querySnapshot.docs.map((doc) => ({
      doc: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ Products }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch user" },
      { status: 500 }
    );
  }
}
