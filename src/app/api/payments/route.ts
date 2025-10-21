import { prisma } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const filter = searchParams.get("filter") || "all";

    const skip = (page - 1) * limit;

    // filter logic
    const now = new Date();
    let startDate: Date | null = null;
    let endDate: Date | null = null;

    if (filter === "this_month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    } else if (filter === "last_month") {
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      endDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    const whereClause =
      startDate && endDate
        ? {
            createdAt: {
              gte: startDate,
              lt: endDate,
            },
          }
        : {};

    const [payments, total] = await Promise.all([
      prisma.payments.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.payments.count({ where: whereClause }),
    ]);

    return NextResponse.json({
      success: true,
      data: payments,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}
