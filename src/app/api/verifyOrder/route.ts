import { prisma } from '@/db/db';
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
const generatedSignature = (razorpayOrderId:string,razorpayPaymentId:string)=>{
    const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET as string;
    const sig = crypto.createHmac("sha256",keySecret)
                      .update(razorpayOrderId + "|" + razorpayPaymentId)       
                      .digest("hex");
    return sig;
}

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});



interface DonationDetails {
  donorName: string;
  donorEmail: string;
  amount: number;
  paymentId: string;
  date: Date;
}

async function generateInvoice(details: DonationDetails) {
  const { donorName, donorEmail, amount, paymentId, date } = details;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { height } = page.getSize();

  let y = height - 80;
  const drawText = (text: string, size = 14, moveY = 20) => {
    page.drawText(text, { x: 50, y, size, font, color: rgb(0, 0, 0) });
    y -= moveY;
  };

  drawText("Donation Invoice", 22, 40);
  drawText(`Invoice ID: ${paymentId}`);
  drawText(`Date: ${new Date(date).toLocaleDateString()}`);
  drawText("");
  drawText("Donor Details", 16, 25);
  drawText(`Name: ${donorName}`);
  drawText(`Email: ${donorEmail}`);
  drawText("");
  drawText("Donation Details", 16, 25);
  drawText(`Amount Donated: Rs.${amount}`);
  drawText(`Payment ID: ${paymentId}`);
  drawText("");
  drawText("Thank you for your generous contribution!", 14, 25);

  const pdfBytes = await pdfDoc.save();

  const invoicesDir = path.join(process.cwd(), "public", "invoices");
  if (!fs.existsSync(invoicesDir)) {
    fs.mkdirSync(invoicesDir, { recursive: true });
  }

  const filePath = path.join(invoicesDir, `${paymentId}.pdf`);
  fs.writeFileSync(filePath, pdfBytes);

  return `${paymentId}.pdf`;
}


export async function POST(request:NextRequest){
    const {razorpay_order_id, razorpay_payment_id, razorpaySignature ,paymentId} = await request.json();

    if(!razorpay_order_id || !razorpay_payment_id || !razorpaySignature){
        return NextResponse.json({message:"All fields are required"}, {status:400});
    }

    if(razorpay_order_id.length < 14 || razorpay_payment_id.length < 14 || razorpaySignature.length < 14){
        return NextResponse.json({message:"Invalid data sent!"}, {status:400});
    }
    
    // Generate signature
    const sig = generatedSignature(razorpay_order_id, razorpay_payment_id);
    if(sig === razorpaySignature){
         const payment = await prisma.payments.update({
            where:{
                id:paymentId
            },
            data:{
                razorPayPaymentId:razorpay_payment_id,
                razorpaySignature:razorpaySignature,
                paymentStatus:"success"
            }
        })
       const invoice = await generateInvoice({
        donorName: payment?.name || "Anonymous Donor",
        donorEmail: payment?.email || "N/A",
        amount: payment.amount,
        paymentId: razorpay_payment_id,
        date: new Date(),
        });
        return NextResponse.json({
            message:"Payment verified successfully",
            invoice,
            success:true,
        },{
            status:200
        });
    }else{
        return NextResponse.json({message:"Invalid signature sent!"}, {status:400});
    }

   
}