"use client";

import React from "react";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FooterProps = {
    searchParams?: Record<string, string | string[]>;
};
const Footer = ({ searchParams }: FooterProps ) => {
    const lang = searchParams?.lang === "hn" ? "hn" : "en";

    return (
        <footer className="relative bg-black text-white">
            {/* Top Banner */}
            <div className="relative bg-[url('/slide1.jpg')] h-54 bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-16 md:py-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-2xl leading-snug">
                        Join your hand with us for a better life and beautiful future.
                    </h2>
                    <Button className="mt-6 md:mt-0 bg-[#b08c61] hover:bg-[#9c7c55] text-white rounded-lg px-6 py-3">
                        Donate Now
                    </Button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo & Text */}
                <div>
                    <Image src={"/Frame 7.png"} alt='logo' className='sm:w-40 w-30 mb-3'  width={150} height={150}/>
                    {/* <p className="text-gray-300 text-sm leading-relaxed">
                        The smallest act of kindness is worth more than the grandest intention.
                    </p> */}
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Social Links</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <a href="https://www.facebook.com/share/1Fr2DpmZMA/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Facebook size={18} /> Facebook
                            </a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <a href="https://www.instagram.com/madhavamfoundationvrindavan?igsh=ZjJjMjVrc3J6bXo3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Instagram size={18} /> Instagram
                            </a>
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <a href="https://youtube.com/@madhavamfoundationvrindavan?si=CI9_poutSGKMFCb1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <Youtube size={18} /> Youtube
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Policies</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/contactUs" className="hover:text-[#b08c61]">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-[#b08c61]">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" className="hover:text-[#b08c61]">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/privacyPolicy" className="hover:text-[#b08c61]">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/RefundCancellationPolicy" className="hover:text-[#b08c61]">
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/termsOfUse" className="hover:text-[#b08c61]">
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
