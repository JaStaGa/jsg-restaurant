import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import faqData from "@/data/faq.json";
import { site } from "@/lib/seo";

type QA = { q: string; a: string };

export const metadata: Metadata = {
    title: "FAQ",
    alternates: { canonical: `${site.url}/faq` },
};

export default function Page() {
    const items = faqData as QA[];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Frequently Asked Questions</h1>
            <div className="mt-6 divide-y">
                {items.map((f, i) => (
                    <details key={i} className="py-4">
                        <summary className="cursor-pointer font-medium">{f.q}</summary>
                        <p className="mt-2 text-charcoal/80">{f.a}</p>
                    </details>
                ))}
            </div>
            <JsonLd json={jsonLd} />
        </main>
    );
}
