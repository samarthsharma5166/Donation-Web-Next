
"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';
interface SectionParaProps {
    section: {
        id: number;
        title: string;
        text: string;
        image: string;
    };
    index: number;
}

const AnimatedPara = ({ section, index }:SectionParaProps) => {
    return (
        <motion.div
            key={section.id}
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Text Section */}
            <div
                className={`h-full rounded-2xl ${index % 2 === 1 ? "md:order-2" : "md:order-1"
                    }`}
            >
                <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {section.title}
                    </h2>
                    <p className="text-gray-600 whitespace-pre-line">
                        {section.text}
                    </p>
                </CardContent>
            </div>

            {/* Image Section */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`w-full h-80 relative rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-1" : "md:order-2"
                    }`}
            >
                <Image
                    src={section.image || "/default-image.jpg"}
                    alt={section.title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </motion.div>
    )
}

export default AnimatedPara