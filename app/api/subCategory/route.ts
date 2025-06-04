import { db } from "@/src/config/firebase";
// import { Query } from "@tanstack/react-query";
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
    const subCategory = searchParams.getAll("subCategory");

    console.log("Recieve api request:", { page, limitCount, subCategory });

    let baseQuery: Query<DocumentData> = query(collection(db, "Products"));

    if (subCategory?.length === 1) {
      baseQuery = query(baseQuery, where("subCategory", "==", subCategory[0]));
    } else if (subCategory?.length > 1) {
      baseQuery = query(
        baseQuery,
        where("subCategory", "in", subCategory.slice(0, 10))
      );
    }

    console.log(
      "quering firestore with :",
      subCategory ? `subCategory=${subCategory}` : "no subCategory filter"
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
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch user" },
      { status: 500 }
    );
  }
}
