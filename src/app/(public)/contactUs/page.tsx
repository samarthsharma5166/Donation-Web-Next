"use client";

import React, { Suspense } from "react";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";

const ContactPage = () => {
    return (
        <Suspense
            fallback={
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
                </div>
            }
        >
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Heading */}
                <div className="text-center mb-10 sm:mb-12">
                    <SectionHeader heading="Contact Us" />
                    <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                        We’d love to hear from you. Reach out via phone, WhatsApp, or email.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Card className="shadow-lg rounded-2xl border border-gray-100">
                            <CardContent className="p-6 sm:p-8 space-y-6">
                                {/* Phone */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <Phone className="text-primary w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Phone / WhatsApp</p>
                                        <a
                                            href="tel:+917906869998"
                                            className="text-blue-600 hover:underline block text-sm sm:text-base"
                                        >
                                            +91 7906869998 (Call)
                                        </a>
                                        <a
                                            href="tel:+919520812589"
                                            className="text-blue-600 hover:underline block text-sm sm:text-base"
                                        >
                                            +91 9520812589 (Call)
                                        </a>
                                        <a
                                            href="https://wa.me/917906869998"
                                            target="_blank"
                                            className="text-green-600 hover:underline block text-sm sm:text-base"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <Mail className="text-primary w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:madhavamfoundation99@gmail.com"
                                            className="text-blue-600 hover:underline text-sm sm:text-base"
                                        >
                                            madhavamfoundation99@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <MapPin className="text-primary w-6 h-6 shrink-0" />
                                    <div>
                                        <p className="font-semibold">Office Address</p>
                                        <p className="text-muted-foreground text-sm sm:text-base">
                                            Shree Vidhya Peeth, Sanskrit Chatravvas, Shyam Kuti, Chetra Prikrima Marg
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="shadow-lg rounded-2xl border border-gray-100">
                            <CardContent className="p-6 sm:p-8">
                                <form className="space-y-4 sm:space-y-6">
                                    <Input type="text" placeholder="Your Name" required className="text-sm sm:text-base" />
                                    <Input type="email" placeholder="Your Email" required className="text-sm sm:text-base" />
                                    <Textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        required
                                        className="text-sm sm:text-base"
                                    />
                                    <Button className="w-full bg-[#867156] hover:bg-[#6e5b45] transition-colors">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </main>
        </Suspense>
    );
};

export default ContactPage;
