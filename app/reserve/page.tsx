import type { Metadata } from "next";
import { site } from "@/lib/seo";
import ReserveForm from "@/components/ReserveForm";

export const metadata: Metadata = {
    title: "Reserve a Table",
    description: "Book a table at JSG Restaurant.",
    alternates: { canonical: `${site.url}/reserve` },
};

export default function Page() {
    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Reserve</h1>
            <ReserveForm />
        </main>
    );
}
