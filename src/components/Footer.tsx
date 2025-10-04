"use client";

import React from "react";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

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
                    <h3 className="text-lg font-bold mb-3">LOGO</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Social Links</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <Instagram size={18} /> Instagram
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <Facebook size={18} /> Facebook
                        </li>
                        <li className="flex items-center gap-2 hover:text-[#b08c61] cursor-pointer">
                            <Youtube size={18} /> Youtube
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/contact" className="hover:text-[#b08c61]">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-[#b08c61]">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#b08c61]">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Address</h3>
                    <p className="text-sm text-gray-300">660 Brooklyn street, New York street</p>
                    <p className="text-sm text-gray-300 mt-2">
                        <span className="block font-medium">Email</span>
                        user@gmail.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
