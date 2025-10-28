import { prisma } from '@/db/db';
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import nodemailer from 'nodemailer';
const generatedSignature = (razorpayOrderId:string,razorpayPaymentId:string)=>{
    const keySecret = process.env.NEXT_PUBLIC_KEY_SECRET as string;
    const sig = crypto.createHmac("sha256",keySecret)
                      .update(razorpayOrderId + "|" + razorpayPaymentId)       
                      .digest("hex");
    return sig;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_API_EMAIL_USER, // your Gmail or domain email
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // app password or SMTP password
  },
});

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_KEY_ID!,
  key_secret: process.env.NEXT_PUBLIC_KEY_SECRET!,
});



function numberToWords(num: number): string {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";

  const convert = (n: number): string => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convert(n % 100) : "");
    if (n < 100000)
      return (
        convert(Math.floor(n / 1000)) +
        " Thousand" +
        (n % 1000 ? " " + convert(n % 1000) : "")
      );
    if (n < 10000000)
      return (
        convert(Math.floor(n / 100000)) +
        " Lakh" +
        (n % 100000 ? " " + convert(n % 100000) : "")
      );
    return String(n);
  };

  return convert(num).trim() + " Only";
}

interface DonationDetails {
  donorName: string;
  donorEmail: string;
  donorAddress?: string;
  donorPAN?: string;
  amount: number;
  paymentId: string;
  date: Date;
}

 async function generateInvoice(details: DonationDetails) {
  const { donorName, donorEmail, donorAddress = "-", donorPAN = "-", amount, paymentId, date } = details;

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Helper: add a new page when content exceeds height
  const addPage = () => {
    const newPage = pdfDoc.addPage([595, 842]);
    return { page: newPage, y: 800 };
  };

  let { page, y } = addPage();
  const { width, height } = page.getSize();

  // === 🖼️ Load Images ===
  const logoPath = path.join(process.cwd(), "public", "Frame 7.png");
  const signaturePath = path.join(process.cwd(), "public", "signature.png");

  let logoImage, signatureImage;
  if (fs.existsSync(logoPath)) {
    const logoBytes = fs.readFileSync(logoPath);
    logoImage = await pdfDoc.embedPng(logoBytes);
  }
  if (fs.existsSync(signaturePath)) {
    const sigBytes = fs.readFileSync(signaturePath);
    signatureImage = await pdfDoc.embedPng(sigBytes);
  }

  // === HEADER BAR ===
page.drawRectangle({
  x: 0,
  y: height - 120,
  width,
  height: 120,
  color: rgb(1, 1, 1), // #FF7A02
});

  if (logoImage) {
    const logoW = 100;
    const logoH = (logoImage.height / logoImage.width) * logoW;
    page.drawImage(logoImage, { x: 40, y: height - logoH - 25, width: logoW, height: logoH });
  }

  page.drawText("MADHAVAM FOUNDATION", {
    x: 160,
    y: height - 60,
    size: 22,
    font: boldFont,
    color: rgb(0, 0, 0),
  });
  page.drawText("Registered NGO - Spreading Compassion & Service", {
    x: 160,
    y: height - 85,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });

  // === BODY ===
  y = height - 150;
  const drawLine = (x1: number, y1: number, x2: number, y2: number) =>
    page.drawLine({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 }, thickness: 0.5, color: rgb(0.7, 0.7, 0.7) });

  page.drawText("Donation Receipt (80G Certificate)", { x: 50, y, size: 16, font: boldFont });
  y -= 30;
  drawLine(45, y + 10, width - 45, y + 10);

  const textBlock = (label: string, value: string, offset: number = 0) => {
    page.drawText(label, { x: 50, y, size: 12, font: boldFont });
    page.drawText(value, { x: 200, y, size: 12, font });
    y -= 20 + offset;
  };

  textBlock("Receipt No.:", paymentId);
  textBlock("Date:", new Date(date).toLocaleDateString("en-IN"));
  textBlock("Donor Name:", donorName);
  textBlock("Address:", donorAddress);
  textBlock("PAN No.:", donorPAN);
  textBlock("Email:", donorEmail);
  textBlock("Amount Donated:", `Rs. ${amount.toLocaleString("en-IN")} (${numberToWords(amount)})`);
  textBlock("Payment Mode:", "Digital");

  y -= 10;
  drawLine(45, y + 5, width - 45, y + 5);

  y -= 30;
  page.drawText(`Dear ${donorName},`, { x: 50, y, size: 12, font });
  y -= 18;
  page.drawText(
    `Thank you for your generous contribution to Madhavam Foundation.`,
    { x: 50, y, size: 12, font }
  );
  y -= 15;
  page.drawText(
    `Your donation supports our mission to bring compassion and service to communities in need.`,
    { x: 50, y, size: 12, font }
  );

  // === Signature Section ===
  y -= 60;
  page.drawText("For Madhavam Foundation", { x: 50, y, size: 12, font });
  if (signatureImage) {
    const sigW = 120;
    const sigH = (signatureImage.height / signatureImage.width) * sigW;
    page.drawImage(signatureImage, { x: 60, y: y - sigH - 5, width: sigW, height: sigH });
    y -= sigH + 10;
  } else y -= 40;

  page.drawText("(Authorised Signatory)", { x: 50, y, size: 12, font });

  // === Add Legal Info ===
  y -= 60;
  if (y < 150) ({ page, y } = addPage()); // auto new page if content low

  page.drawText("Legal & Tax Information:", { x: 50, y, size: 14, font: boldFont });
  y -= 20;
  const lines = [
    "Donations to Madhavam Foundation qualify for deduction U/s 80G(5) of the Income Tax Act 1961.",
    "Unique Registration No.: AAJTM1200BF20251 (provisionally approved on July 18, 2025).",
    "Valid up to AY 2026-27. IT PAN: AAJTM1200B | 12AA: AAJTM1200BE20251 | ",
    "DARPAN ID: UP/2024/0417365.",
    "This receipt becomes invalid in case of non-realization or refund of donation.",
    "Form 10BE will be issued for your income-tax deduction claim.",
  ];
  for (const line of lines) {
    page.drawText(line, { x: 50, y, size: 11, font });
    y -= 15;
  }

  // === Footer ===
  y -= 30;
  drawLine(45, y + 10, width - 45, y + 10);
  y -= 20;
  page.drawText("This is a computer-generated receipt. For any queries, please email:", {
    x: 50, y, size: 10, font,
  });
  y -= 15;
  page.drawText("madhavamfoundation99@gmail.com | https://www.madhavamfoundation.com", {
    x: 50, y, size: 10, font, color: rgb(0.1, 0.3, 0.7),
  });
  y -= 15;
  page.drawText("Registered Office: 123 Compassion Street, Sector-63, Noida, Uttar Pradesh - 201301", {
    x: 50, y, size: 10, font, color: rgb(0.3, 0.3, 0.3),
  });

  // === SAVE ===
  const pdfBytes = await pdfDoc.save();
  const invoicesDir = "/var/www/invoice";
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
        const address = `${payment?.address}, ${payment?.state}, ${payment?.country}, ${payment?.pincode}`
       const invoice = await generateInvoice({
        donorName: payment?.name || "Anonymous Donor",
        donorEmail: payment?.email || "N/A",
        amount: payment.amount,
        paymentId: razorpay_payment_id,
        date: new Date(),
        donorPAN:payment?.panNo,
        donorAddress:address
        });
        await prisma.payments.update({
            where:{
                id:paymentId
            },
            data:{
                invoice:invoice
            }
        })

        const invoiceUrl = `https://www.madhavamfoundation.com/invoices/${invoice}`;
        const adminEmail = "madhavamfoundation99@gmail.com";

        const filePath = path.join("/var/www/invoice", invoice); // invoice = `${paymentId}.pdf`

        const mailOptionsUser = {
          from: `"Madhavam Foundation" <${process.env.NEXT_PUBLIC_API_EMAIL_USER}>`,
          to: payment.email,
          subject: "Your Donation Receipt - Madhavam Foundation",
          html: `
            <div style="font-family:Arial, sans-serif; color:#333;">
              <h2>Dear ${payment?.name || "Donor"},</h2>
              <p>Thank you for your generous contribution of <b>₹${payment.amount.toLocaleString("en-IN")}</b>.</p>
              <p>Please find attached your donation receipt (80G certificate) for your records.</p>
              <br/>
              <p>Warm regards,<br/><b>Madhavam Foundation</b></p>
            </div>
          `,
          attachments: [
            {
              filename: `${invoice}`, // e.g., "pay_Fm123.pdf"
              path: filePath,
              contentType: "application/pdf",
            },
          ],
        };


      const mailOptionsAdmin = {
        from: `"Madhavam Foundation" <${process.env.NEXT_PUBLIC_API_EMAIL_USER}>`,
        to: adminEmail,
        subject: `New Donation Received - ₹${payment.amount.toLocaleString("en-IN")}`,
        html: `
          <div style="font-family:Arial, sans-serif; color:#333;">
            <h2>New Donation Received</h2>
            <p><b>Name:</b> ${payment?.name}</p>
            <p><b>Email:</b> ${payment?.email}</p>
            <p><b>Amount:</b> ₹${payment.amount.toLocaleString("en-IN")}</p>
            <p><b>Payment ID:</b> ${razorpay_payment_id}</p>
            <p><b>Date:</b> ${new Date().toLocaleString("en-IN")}</p>
            <p><a href="${invoiceUrl}" target="_blank" style="color:#FF7A02;">View Invoice Online</a></p>
            <br/>
            <p>The invoice PDF is attached for your internal record.</p>
          </div>
        `,
        attachments: [
            {
              filename: `${invoice}`, // e.g., "pay_Fm123.pdf"
              path: filePath,
              contentType: "application/pdf",
            },
          ],
      };

        try {
          await transporter.sendMail(mailOptionsUser);
          await transporter.sendMail(mailOptionsAdmin);
          console.log("Emails sent successfully to admin and donor");
        } catch (error) {
          console.error("Email send error:", error);
        }
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