import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import AimSection from "@/components/AimSection";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatAppButton from "@/components/WhatAppButton";
import CallButton from "@/components/CallButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Madhavam Foundation | Empowering Communities & Social Welfare NGO",
  description: "Join Madhavam Foundation, a leading NGO in India, dedicated to education, healthcare, and rural empowerment. Help us transform lives with compassion.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Madhavam Foundation",
  "url": "https://www.madhavamfoundation.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.madhavamfoundation.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

type SearchParams = Promise<{ lang: string }>
export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const searchParam = await searchParams;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <Button className='fixed z-40 left-4 bottom-4 bg-[#867156] hover:bg-[#8b7e6c] transition-transform duration-300 hover:-translate-y-1 hover:scale-110'>
      <Link href={"/donate"}>Donate Now</Link>
      </Button>
      <CallButton/>
      <WhatAppButton/>
      <Header />
      <HeroSection />
      <FeatureSection />
      <AimSection searchParams={searchParam} />
      <BlogsSection searchParams={searchParam} />
      <Footer searchParams={searchParam} />
    </>
  );
}
