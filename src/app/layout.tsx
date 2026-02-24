import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhavam Foundation | Empowering Lives Through Education & Social Welfare",
  description:
    "Madhavam Foundation is a non-profit organization dedicated to uplifting rural communities through education, healthcare, women empowerment, and social welfare programs across India. Join us in building a better and compassionate society.",
  keywords: [
    "Madhavam Foundation",
    "NGO in India",
    "non profit organization",
    "rural development",
    "education for all",
    "women empowerment",
    "healthcare initiatives",
    "environmental NGO",
    "charity foundation",
    "social welfare programs"
  ],
  openGraph: {
    title: "Madhavam Foundation | Transforming Communities with Compassion",
    description:
      "A non-profit organization committed to education, healthcare, and women empowerment for underprivileged communities in India.",
    url: "https://www.madhavamfoundation.com",
    siteName: "Madhavam Foundation",
    images: [
      {
        url: "/Frame 7.png",
        width: 1200,
        height: 630,
        alt: "Madhavam Foundation Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/Frame 7.png", // Path relative to the public directory
  },
};


import { LoadingProvider } from "@/context/LoadingContext";
import LoadingHandler from "@/components/LoadingHandler";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <LoadingHandler />
          {children}
          <Toaster />
        </LoadingProvider>
      </body>
    </html>
  );
}
