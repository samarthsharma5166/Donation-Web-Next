import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server';
const generatedSignature = (razorpayOrderId:string,razorpayPaymentId:string)=>{
    const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET as string;
    const sig = crypto.createHmac("sha256",keySecret)
                      .update(razorpayOrderId + "|" + razorpayPaymentId)       
                      .digest("hex");
    return sig;
}

export async function POST(request:NextRequest){
    const {razorpay_order_id, razorpay_payment_id, razorpaySignature} = await request.json();
    console.log(razorpay_order_id, razorpay_payment_id, razorpaySignature);
    const sig = generatedSignature(razorpay_order_id, razorpay_payment_id);
    if(sig === razorpaySignature){
        return NextResponse.json({message:"Payment verified successfully"}, {status:200});
    }else{
        return NextResponse.json({message:"Invalid signature sent!"}, {status:400});
    }
     
    return NextResponse.json({
        message:"Payment verified successfully",
        success:true,
    },{
        status:200
    });
}