// /api/createPlan/route.ts
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});

export async function POST(req: Request) {
  try {
    const { amount, interval = 1, period = "monthly" } = await req.json();

    const plan = await razorpay.plans.create({
      period, // monthly, weekly, yearly
      interval, // 1 means every month
      item: {
        name: "Monthly Donation Plan",
        amount: amount * 100, // in paise
        currency: "INR",
      },
    });

    return NextResponse.json({ plan }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error creating plan" }, { status: 500 });
  }
}
