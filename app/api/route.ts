import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Working" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error?.message || "Failed to fetch user" },
      { status: 500 }
    );
  }
}
