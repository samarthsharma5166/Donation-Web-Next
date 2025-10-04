import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json(
    { success: true, message: "Logged out successfully" },
    { status: 200 }
  );

  res.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0), // expire immediately
  });

  return res;
}
