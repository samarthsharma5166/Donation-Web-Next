import { prisma } from '@/db/db';
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});

export async function POST(req:Request){
   try {
     const {name,email,phone,address,country,state,pincode,dob,comments, amount} = await req.json();

    // if(!name || !email || !phone || !address || !country || !state || !pincode || !dob || !amount){
    //   return NextResponse.json({message:"All fields are required"}, {status:400});
    // }

    // if(amount < 1){
    //   return NextResponse.json({message:"Amount must be greater than 0"}, {status:400});
    // }

    // if(phone.length !== 10){
    //   return NextResponse.json({message:"Phone number must be 10 digits"}, {status:400});
    // }

    // if(pincode.length !== 6){
    //   return NextResponse.json({message:"Pincode must be 6 digits"}, {status:400});
    // }

    // if(new Date(dob) >= new Date()){
    //   return NextResponse.json({message:"Date of Birth must be in the past"}, {status:400});
    // }

    const order = await razorpay.orders.create({
        amount:amount * 100,
        currency:"INR"

    });
    const payment = await prisma.payments.create({
      data:{
        name:name,    
        email,   
        phone,   
        address ,
        country, 
        state ,  
        pincode ,
        dob:new Date(dob),   
        comments ,
        amount:Number(amount)  ,
        razorpayOrderId : order.id,
      }
    })
    return NextResponse.json({...order,paymentId:payment.id}, {status:200});
   } catch (error) {
    console.log(error);
    return NextResponse.json({message:"Internal Server Error"}, {status:500});
   }
}
