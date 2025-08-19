import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SpecialsTicker from "@/components/SpecialsTicker";
import StickyActionBar from "@/components/StickyActionBar";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Neighborhood Bistro · Book a Table",
  alternates: { canonical: site.url },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "JSG Restaurant",
    url: site.url,
    servesCuisine: ["American", "Seasonal"],
    address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", postalCode: "02118" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "11:30", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:30", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "20:00" }
    ],
  };

  return (
    <main>
      <SpecialsTicker />
      <Hero />
      <StickyActionBar />
      {/* Sections for Today’s Specials preview, Testimonials, CTA blocks can go here */}
      <JsonLd json={jsonLd} />
    </main>
  );
}