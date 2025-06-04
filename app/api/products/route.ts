import { db } from "@/src/config/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  orderBy,
  where,
  Query,
  DocumentData,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limitCount = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");

    console.log("Received API request: ", { page, limitCount, category });

    // Start with a collection reference
    let baseQuery: Query<DocumentData> = collection(db, "Products");

    if (category) {
      baseQuery = query(baseQuery, where("category", "==", category)); // Ensure baseQuery remains a Query<DocumentData>
    }

    // Fetch total count for pagination
    const allProductsSnapshot = await getDocs(baseQuery);
    const totalProducts = allProductsSnapshot.size;

    const offset = (page - 1) * limitCount;

    // Pagination logic
    let productsQuery: Query<DocumentData>;
    if (offset === 0) {
      productsQuery = query(baseQuery, orderBy("createdAt"), limit(limitCount));
    } else {
      const previousPageSnapshot = await getDocs(
        query(baseQuery, orderBy("createdAt"), limit(offset))
      );
      const lastVisible =
        previousPageSnapshot.docs[previousPageSnapshot.docs.length - 1];

      if (lastVisible) {
        productsQuery = query(
          baseQuery,
          orderBy("createdAt"),
          startAfter(lastVisible),
          limit(limitCount)
        );
      } else {
        return NextResponse.json(
          { products: [], total: totalProducts, page, limit: limitCount },
          { status: 200 }
        );
      }
    }

    // Fetch paginated products
    const querySnapshot = await getDocs(productsQuery);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(
      {
        products,
        total: totalProducts,
        page,
        limit: limitCount,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch products";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
