// /api/createSubscription/route.ts
import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { prisma } from "@/db/db";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});

export async function POST(req: Request) {

  try {
    const { 
        planId,
         name,    
        email,   
        phone,   
        address ,
        country, 
        state ,  
        pincode ,
        dob,  
        total_count ,
        comments ,
        amount } = await req.json();


      if(!planId){
        return NextResponse.json({success:false, message:"Something went wrong"}, {status:400});
       }

       if(!name && !email && !phone && !address && !country && !state && !pincode && !dob && !amount && total_count === undefined){
        return NextResponse.json({success:false, message:"All fields are required"}, {status:400});
       }

    const subscription = await razorpay.subscriptions.create({
      plan_id: planId, // pre-created plan ID
      total_count, // number of months (optional)
      customer_notify: 1,
    });

    // Save to DB
    const payment = await prisma.payments.create({
      data: {
        name:name,    
        email,   
        phone,   
        address ,
        country, 
        state ,  
        pincode ,
        dob:new Date(dob),   
        comments ,
        amount:Number(amount),
        subscriptionId: subscription.id,
        paymentStatus: "pending",
      },
    });

    return NextResponse.json(
      { subscriptionId: subscription.id, paymentId: payment.id },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
