"use client";
import React, { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import axios from "axios";
import { toast } from "sonner";
import { Check, Loader2 } from "lucide-react";
import { FaRegCreditCard } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldDescription, FieldSeparator, FieldSet } from "@/components/ui/field";
import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface DonationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  pincode: string;
  dob: string;
  comments?: string;
  amount: number;
  aadharNo: string;
  panNo: string;
}

export interface SubscriptionFormData extends DonationFormData {
  amount: number;
  interval: number;
  period?: string;
  total_count: number;
}

const DonationPage = () => {
  const { register, handleSubmit, setValue, reset } = useForm<DonationFormData | SubscriptionFormData>();
  const [isOneTime, setIsOneTime] = useState(true);
  const [loading,setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | string>(false);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const createOrder = async (data: DonationFormData) => {
    setLoading(true);
    const res = await axios.post(`${baseUrl}/api/createOrder`, data);
    const paymentId = res.data.paymentId;
    const paymentData = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      order_id: res.data.id,
      handler: async (response: any) => {
        const verifyRes = await fetch(`${baseUrl}/api/verifyOrder`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId: paymentId, razorpay_order_id: response.razorpay_order_id, razorpay_payment_id: response.razorpay_payment_id, razorpaySignature: response.razorpay_signature, }),
        });
        const verifyData = await verifyRes.json();
        console.log(verifyData);
        if (verifyData.success){ 
          toast.success("Payment verified successfully")
          console.log(verifyData);
          setPaymentSuccess(verifyData.invoice);
          // window.open(verifyData.invoice.short_url, "_blank");
        };
        setLoading(false);
      },
    };
    new (window as any).Razorpay(paymentData).open();
  };

  const createSubscription = async (data: SubscriptionFormData) => {
    setLoading(true);
    const res = await axios.post(`${baseUrl}/api/createPlan`, data);
    console.log("subscription",res);
    const planId = res.data.plan.id;
    const subscriptionres = await axios.post(`${baseUrl}/api/createSubscription`, { ...data, planId });
    const { subscriptionId, paymentId } = subscriptionres.data;

    const options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      subscription_id: subscriptionId,
      name: "Monthly Donation",
      description: "Auto monthly donation via Razorpay",
      handler: async function (response: any) {
       const subscriptionRes =  await fetch(`${baseUrl}/api/verifySubscription`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_subscription_id: response.razorpay_subscription_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        const resdata = await subscriptionRes.json();
        toast.success("Subscription started successfully!");
        if (resdata.invoice?.short_url) {
          setPaymentSuccess(true);
          window.open(resdata.invoice.short_url, "_blank");
        } 
        setLoading(false);
      },
      theme: { color: "#8B7E6C" },
    };
    
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };


  const downloadInvoice = (fileName: string) => {
    const fileUrl = `/invoices/${fileName}`; // served from /public
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const onSubmit = (data: DonationFormData | SubscriptionFormData) => {
    if (isOneTime) createOrder(data as DonationFormData);
    else createSubscription(data as SubscriptionFormData);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center border border-gray-100"
        >
          {/* Animated Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle className="text-green-500 w-12 h-12" />
            </div>
          </motion.div>

          {/* Text */}
          <h1 className="text-2xl font-semibold text-gray-800">Payment Successful 🎉</h1>
          <p className="text-gray-600 mt-2">
            Thank you for your donation! Your support helps us continue our mission.
          </p>

          {/* Download Invoice Button */}
          <div className="mt-6">
            <Button
              onClick={() => downloadInvoice(paymentSuccess as string)}
              className="w-full bg-[#8B7E6C] hover:bg-[#7a6d5e] text-white rounded-lg py-2 font-medium transition-all"
            >
              Download Invoice
            </Button>
          </div>

        </motion.div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
        </div>
      }
    >
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100/60 py-10">
        <div className="z-10 w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 mx-3">
          {/* Toggle between forms */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-200 rounded-full p-1 w-fit">
              <Button
                variant={isOneTime ? "default" : "ghost"}
                onClick={() => {
                  setIsOneTime(true);
                  reset();
                  setStep(1);
                }}
                className={`rounded-full px-4 py-2 text-sm ${isOneTime ? "bg-[#8B7E6C] text-white" : "text-gray-700"}`}
              >
                One-Time
              </Button>
              <Button
                variant={!isOneTime ? "default" : "ghost"}
                onClick={() => {
                  setIsOneTime(false);
                  reset();
                  setStep(1);
                }}
                className={`rounded-full px-4 py-2 text-sm ${!isOneTime ? "bg-[#8B7E6C] text-white" : "text-gray-700"}`}
              >
                AutoPay
              </Button>
            </div>
          </div>

          <SectionHeader heading={isOneTime ? "One-Time Donation" : "AutoPay Donation"} />

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            {step === 1 && (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend className="text-lg font-semibold text-gray-800">Personal Information</FieldLegend>
                  <div className="grid gap-4 mt-4">
                    <Field>
                      <FieldLabel>Name</FieldLabel>
                      <Input {...register("name", { required: true })} placeholder="John Doe" />
                    </Field>
                    <Field>
                      <FieldLabel>Email</FieldLabel>
                      <Input {...register("email", { required: true })} placeholder="user@gmail.com" />
                    </Field>
                    <Field>
                      <FieldLabel>Phone</FieldLabel>
                      <Input {...register("phone", { required: true })} placeholder="+91 9876543210" />
                    </Field>
                    <Field>
                      <FieldLabel>Address</FieldLabel>
                      <Input {...register("address", { required: true })} placeholder="117 Street, City" />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Field>
                        <FieldLabel>Country</FieldLabel>
                        <Select onValueChange={(value) => setValue("country", value)} >
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="USA">USA</SelectItem>
                            <SelectItem value="UK">UK</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field>
                        <FieldLabel>State</FieldLabel>
                        <Input {...register("state", { required: true })} placeholder="Uttar Pradesh" />
                      </Field>
                      <Field>
                        <FieldLabel>Pincode</FieldLabel>
                        <Input {...register("pincode", { required: true })} placeholder="123456" />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel>Date of Birth</FieldLabel>
                      <Input type="date" {...register("dob", { required: true })} />
                    </Field>
                  </div>
                </FieldSet>
                <div className="flex justify-end mt-4">
                  <Button onClick={nextStep} type="button" className="bg-[#8B7E6C] text-white">
                    Next
                  </Button>
                </div>
              </FieldGroup>
            )}

            {step === 2 && (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend className="text-lg font-semibold text-gray-800">Donation Details</FieldLegend>
                  <div className="grid gap-4 mt-4">
                    <Field>
                      <FieldLabel>Comments</FieldLabel>
                      <Textarea {...register("comments")} placeholder="Any special message?" className="resize-none" />
                    </Field>
                    <Field>
                      <FieldLabel>Donation Amount (₹)</FieldLabel>
                      <Input type="number" {...register("amount", { required: true })} placeholder="Enter amount" />
                    </Field>
                    <Field>
                      <FieldLabel>Pan Number</FieldLabel>
                      <Input type="text" {...register("panNo", { required: true })} placeholder="Enter pancard number" />
                    </Field>
                    <Field>
                      <FieldLabel>Aadhar Number</FieldLabel>
                      <Input type="text" {...register("aadharNo", { required: true })} placeholder="Enter aadhar number" />
                    </Field>

                    {!isOneTime && (
                      <>
                        <Field>
                          <FieldLabel>Billing Frequency</FieldLabel>
                          <Select {...register("period", { required: true })} defaultValue="monthly">
                            <SelectTrigger>
                              <SelectValue placeholder="Select billing frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="yearly">Yearly</SelectItem>
                            </SelectContent>
                          </Select>
                          <FieldDescription>
                            How often the payment should be charged (e.g., Monthly, Weekly).
                          </FieldDescription>
                        </Field>

                        <Field>
                          <FieldLabel>Billing Interval</FieldLabel>
                          <Input
                            type="number"
                            {...register("interval", { required: true })}
                            placeholder="1"
                          />
                          <FieldDescription>
                            Number of <strong>period units</strong> between each charge.
                            For example, if the period is set to <em>month</em> and interval is <em>1</em>,
                            the customer will be charged every month. If the interval is <em>3</em>,
                            they’ll be charged every 3 months.
                          </FieldDescription>
                        </Field>

                        <Field>
                          <FieldLabel>Total Billing Cycles</FieldLabel>
                          <Input
                            type="number"
                            {...register("total_count", { required: true })}
                            placeholder="12"
                          />
                          <FieldDescription>
                            The total number of times the customer will be charged before the subscription ends.
                            Example: For a monthly plan lasting 1 year, enter <strong>12</strong>.
                            Leave blank for ongoing (auto-renewing) subscriptions.
                          </FieldDescription>
                        </Field>



                        {/* <>
                          <Field>
                            <FieldLabel>Billing Frequency</FieldLabel>
                            <Select {...register("period", { required: true })} defaultValue="monthly">
                              <SelectTrigger>
                                <SelectValue placeholder="Select billing frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="yearly">Yearly</SelectItem>
                              </SelectContent>
                            </Select>
                            <FieldDescription>
                              How often the payment should be charged (e.g., Monthly, Weekly).
                            </FieldDescription>
                          </Field>

                          <Field>
                            <FieldLabel>Interval (in days)</FieldLabel>
                            <Input
                              type="number"
                              {...register("interval", { required: true })}
                              placeholder="30"
                            />
                            <FieldDescription>
                              Number of days between each payment. For monthly, use 30; for weekly, use 7.
                            </FieldDescription>
                          </Field>

                          <Field>
                            <FieldLabel>Total Billing Cycles</FieldLabel>
                            <Input
                              type="number"
                              {...register("total_count", { required: true })}
                              placeholder="12"
                            />
                            <FieldDescription>
                              Total number of payments to be collected. For 1 year monthly subscription, enter 12.
                            </FieldDescription>
                          </Field>
                        </> */}
                      </>
                    )}
                  </div>
                </FieldSet>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" type="button" onClick={prevStep}>
                    Back
                  </Button>
                  <Button disabled={loading} type="submit" className="flex items-center gap-2 bg-[#8B7E6C] text-white">
                    <FaRegCreditCard />
                    {isOneTime ? "Donate Now" : "Start AutoPay"}
                  </Button>
                </div>
              </FieldGroup>
            )}
          </form>
        </div>

        <div className="mt-10 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
            Prefer Direct Payment? Pay via UPI or Bank Transfer
          </h2>

          <div className="flex flex-col items-center space-y-5">
            {/* UPI QR Image */}
            <img
              src="/qr.jpeg"
              alt="UPI QR Code"
              className="w-full h-[500px] object-contain border rounded-xl shadow-sm"
            />

            {/* Bank Account Details */}
            <div className="bg-gray-50 border rounded-xl p-5 w-full sm:w-3/4 text-gray-700 text-sm leading-relaxed">
              <p><strong>Bank Name:</strong> HDFC</p>
              <p><strong>Account Number:</strong> 50200097861826</p>
              <p><strong>Account Holder:</strong> MADHAVAM FOUNDATION</p>
              <p><strong>IFSC Code:</strong> HDFC0000942</p>
              <p><strong>Branch:</strong> VRINDAVAN</p>
              <p><strong>Account Type:</strong> CURRENT</p>
            </div>

            {/* Note / Contact */}
            <p className="text-xs text-gray-500 text-center max-w-md">
              After making a direct payment, please share your transaction details
              and receipt with us at{" "}
              <strong>madhavamfoundation99@gmail.com </strong> or via WhatsApp
              for confirmation. 🙏
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </Suspense>
  );
};

export default DonationPage;
