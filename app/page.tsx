import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SpecialsTicker from "@/components/SpecialsTicker";
import StickyActionBar from "@/components/StickyActionBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/seo";
import HomeCTAs from "@/components/HomeCTAs";
import HomeSpecials from "@/components/HomeSpecials";
import HomeMenuPreview from "@/components/HomeMenuPreview";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Neighborhood Bistro · Book a Table",
  alternates: { canonical: site.url },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: "JSG Restaurant", url: site.url };
  return (
    <main>
      <SpecialsTicker />
      <Hero />
      <HomeCTAs />
      <HomeSpecials />
      <HomeMenuPreview />
      <TestimonialCarousel />
      <StickyActionBar />
      <JsonLd json={jsonLd} />
    </main>
  );
}
