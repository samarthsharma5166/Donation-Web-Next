"use client"
import React, { Suspense } from "react";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";

const page = () => {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><Loader2 className="animate-spin text-gray-500 w-8 h-8" /></div>}>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <SectionHeader heading={"Contact Us"} />
                    <p className="text-muted-foreground mt-2">
                        We’d love to hear from you. Reach out via phone, WhatsApp, or email.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Card className="shadow-lg rounded-2xl">
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-primary w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Phone / WhatsApp</p>
                                        <a
                                            href="tel:+919876543210"
                                            className="text-blue-600 hover:underline block"
                                        >
                                            +91 98765 43210 (Call)
                                        </a>
                                        <a
                                            href="https://wa.me/919876543210"
                                            target="_blank"
                                            className="text-green-600 hover:underline block"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="text-primary w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:info@example.com"
                                            className="text-blue-600 hover:underline"
                                        >
                                            info@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <MapPin className="text-primary w-6 h-6" />
                                    <div>
                                        <p className="font-semibold">Office Address</p>
                                        <p className="text-muted-foreground">
                                            123 Business Street, New Delhi, India
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="shadow-lg rounded-2xl">
                            <CardContent className="p-6">
                                <form className="space-y-4">
                                    <Input type="text" placeholder="Your Name" required />
                                    <Input type="email" placeholder="Your Email" required />
                                    <Textarea placeholder="Your Message" rows={4} required />
                                    <Button className="w-full bg-[#867156]">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </Suspense>
    );
};

export default page;
