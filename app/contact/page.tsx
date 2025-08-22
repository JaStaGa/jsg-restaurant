import type { Metadata } from "next";
import { site } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with JSG Restaurant.",
    alternates: { canonical: `${site.url}/contact` },
};

export default function Page() {
    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Contact</h1>
            <ContactForm />
        </main>
    );
}
