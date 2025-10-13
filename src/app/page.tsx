import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import AimSection from "@/components/AimSection";
import BlogsSection from "@/components/BlogsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatAppButton from "@/components/WhatAppButton";

type SearchParams = Promise<{ lang: string }>
export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const searchParam = await searchParams;

  return (
    <>
      <WhatAppButton/>
      <Header />
      <HeroSection />
      <FeatureSection />
      <AimSection searchParams={searchParam} />
      <BlogsSection />
      <Footer searchParams={searchParam} />
    </>
  );
}
