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
  const page = pdfDoc.addPage([595, 842]); // A4 page
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const { height, width } = page.getSize();

  // === 🟦 Header Section ===
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width,
    height: 100,
    color: rgb(0.13, 0.32, 0.68), // Deep blue header
  });

  page.drawText("MADHAVAM FOUNDATION", {
    x: 50,
    y: height - 60,
    size: 22,
    font: boldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText("Registered NGO - Spreading Compassion & Service", {
    x: 50,
    y: height - 80,
    size: 12,
    font,
    color: rgb(1, 1, 1),
  });

  // === 🧾 Invoice Title Section ===
  let y = height - 140;
  page.drawText("Donation Invoice", {
    x: 50,
    y,
    size: 20,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 30;
  page.drawText(`Invoice ID: ${paymentId}`, { x: 50, y, size: 12, font });
  page.drawText(`Date: ${new Date(date).toLocaleDateString()}`, {
    x: 400,
    y,
    size: 12,
    font,
  });

  // === 👤 Donor Details Box ===
  y -= 50;
  page.drawRectangle({
    x: 45,
    y: y - 70,
    width: width - 90,
    height: 70,
    color: rgb(0.95, 0.96, 0.98),
  });

  page.drawText("Donor Details", {
    x: 50,
    y: y - 15,
    size: 14,
    font: boldFont,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText(`Name: ${donorName}`, {
    x: 60,
    y: y - 35,
    size: 12,
    font,
  });
  page.drawText(`Email: ${donorEmail}`, {
    x: 60,
    y: y - 55,
    size: 12,
    font,
  });

  // === 💸 Donation Details Box ===
  y -= 110;
  page.drawRectangle({
    x: 45,
    y: y - 80,
    width: width - 90,
    height: 80,
    color: rgb(0.95, 0.96, 0.98),
  });

  page.drawText("Donation Details", {
    x: 50,
    y: y - 15,
    size: 14,
    font: boldFont,
  });

  page.drawText(`Payment ID: ${paymentId}`, {
    x: 60,
    y: y - 35,
    size: 12,
    font,
  });

  // Highlight the donation amount
  page.drawText(`Amount Donated: RS.${amount.toLocaleString("en-IN")}`, {
    x: 60,
    y: y - 55,
    size: 13,
    font: boldFont,
    color: rgb(0, 0.45, 0.15),
  });

  // === ❤️ Thank You Section ===
  y -= 130;
  page.drawText("Thank You!", {
    x: 50,
    y,
    size: 18,
    font: boldFont,
    color: rgb(0.1, 0.4, 0.7),
  });

  y -= 25;
  page.drawText(
    "Your contribution helps Madhavam Foundation serve communities with love and dedication.",
    { x: 50, y, size: 12, font, color: rgb(0, 0, 0) }
  );

  y -= 50;
  page.drawText("Warm regards,", {
    x: 50,
    y,
    size: 12,
    font,
  });
  y -= 20;
  page.drawText("Team Madhavam Foundation", {
    x: 50,
    y,
    size: 12,
    font: boldFont,
    color: rgb(0.1, 0.4, 0.7),
  });

  // === 🧾 Footer Line ===
  page.drawLine({
    start: { x: 45, y: 60 },
    end: { x: width - 45, y: 60 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText("https://www.madhavamfoundation.com | info@madhavamfoundation.org", {
    x: 50,
    y: 40,
    size: 10,
    font,
    color: rgb(0.4, 0.4, 0.4),
  });

  // === 💾 Save File ===
  const pdfBytes = await pdfDoc.save();
  const invoicesDir = path.join(process.cwd(), "public", "invoices");
  if (!fs.existsSync(invoicesDir)) fs.mkdirSync(invoicesDir, { recursive: true });

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