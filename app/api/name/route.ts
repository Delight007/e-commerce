import { db } from "@/src/config/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  startAfter,
  where,
} from "firebase/firestore";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limitCount = parseInt(searchParams.get("limitCount") || "40");
    const name = searchParams.getAll("name");

    console.log("Recieve api request:", { page, limitCount, name });

    let baseQuery: Query<DocumentData> = query(collection(db, "Products"));

    if (name?.length === 1) {
      baseQuery = query(baseQuery, where("name", "==", name[0]));
    } else if (name?.length > 1) {
      baseQuery = query(baseQuery, where("name", "in", name.slice(0, 10)));
    }

    console.log(
      "quering firestore with :",
      name ? `name=${name}` : "no name filter"
    );

    // fetch total count for pagination

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
  } catch (err: any) {
    return NextResponse.json(
      { message: err?.message || "failed to fetch data" },
      { status: 500 }
    );
  }
}
