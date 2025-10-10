"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaRegCreditCard } from "react-icons/fa6";
import SectionHeader from "@/components/SectionHeader";
import { useForm } from "react-hook-form";
import Script from "next/script";
import axios from 'axios';
import { toast } from "sonner";

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
}

const DonationPage = () => {
  const { register, handleSubmit, setValue, reset } = useForm();

  const createOrder = async(data:DonationFormData)=>{
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const res = await axios.post(`${baseUrl}/api/createOrder`,{amount:data.amount});
    console.log(res.data);
    const paymentData = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      order_id:res.data.id,
      handler: async function (response: any) {
        console.log("rsfjalkjlf",response);
        const res = await fetch(`${baseUrl}/api/verifyOrder`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          })
        })
        const data = await res.json();
        if(data.success === true){
          toast.success("Payment verified successfully");
        }
      }
    }
    const payment = new (window as any).Razorpay(paymentData);
    payment.open();
  }

  // ✅ Handle form submission
  const onSubmit = (data:DonationFormData) => {
      createOrder(data)
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <Header />

      <main className="min-h-screen flex justify-center bg-gray-100/50 overflow-hidden py-10">
        <div className="z-10 w-full max-w-lg bg-white backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl p-8 mx-4">
          <SectionHeader heading="Donation Form" />

          {/* ✅ Use handleSubmit to capture all inputs */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="text-lg font-semibold text-gray-800">
                  Personal Information
                </FieldLegend>
                <FieldDescription>
                  All transactions are secure and encrypted.
                </FieldDescription>

                <div className="space-y-4 mt-4">
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input {...register("name", { required: true })} placeholder="John Doe" />
                  </Field>

                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input {...register("email", { required: true })} placeholder="user@gmail.com" />
                    <FieldDescription>Enter your email to receive a receipt.</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel>Phone Number</FieldLabel>
                    <Input {...register("phone", { required: true })} placeholder="+91 9876543210" />
                  </Field>

                  <Field>
                    <FieldLabel>Address</FieldLabel>
                    <Input {...register("address", { required: true })} placeholder="117 Street, City, State" />
                  </Field>

                  <div className="grid grid-cols-3 gap-3">
                    <Field>
                      <FieldLabel>Country</FieldLabel>
                      {/* ✅ Manually connect Select with react-hook-form */}
                      <Select
                        onValueChange={(value) => setValue("country", value)}
                        defaultValue="India"
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="India" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="USA">USA</SelectItem>
                          <SelectItem value="UK">UK</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
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

              <FieldSeparator />

              <FieldSet>
                <FieldLegend className="text-lg font-semibold text-gray-800">
                  Additional Details
                </FieldLegend>
                <Field>
                  <FieldLabel>Comments</FieldLabel>
                  <Textarea {...register("comments")} placeholder="Add any additional comments" className="resize-none" />
                </Field>

                <Field>
                  <FieldLabel>Donation Amount (₹)</FieldLabel>
                  <Input type="number" {...register("amount", { required: true })} placeholder="Enter amount" />
                </Field>
              </FieldSet>

              <div className="flex justify-between items-center pt-4">
                <Button
                  type="submit"
                  className="flex items-center gap-2 bg-[#8B7E6C] hover:bg-[#7c6e5d] text-white px-6 py-2 rounded-lg shadow-md transition-all"
                >
                  <FaRegCreditCard className="text-lg" />
                  Donate Now
                </Button>
                <Button variant="outline" type="button" onClick={() => reset()}>
                  Cancel
                </Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DonationPage;
