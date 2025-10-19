// /api/verifySubscription/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/db/db";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});
export async function POST(req: Request) {
  const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature, paymentId } = await req.json();

  const secret = process.env.NEXT_PUBLIC_KEY_SECRET!;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(razorpay_payment_id + "|" + razorpay_subscription_id)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    await prisma.payments.update({
      where: { id: paymentId },
      data: { paymentStatus: "active", razorPayPaymentId: razorpay_payment_id },
    });

    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    const invoice = await razorpay.invoices.fetch(payment.invoice_id!);
    
    return NextResponse.json({ success: true,invoice },{ status: 200 });
  }

  return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 });
}
