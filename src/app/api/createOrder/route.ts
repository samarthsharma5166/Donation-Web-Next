import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});

export async function POST(req:Request){
    const {amount} = await req.json();
    const order = await razorpay.orders.create({
        amount:amount * 100,
        currency:"INR"
    });
    return NextResponse.json(order);
}
