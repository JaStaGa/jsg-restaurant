import type { Metadata } from "next";
import { site } from "@/lib/seo";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Photos of our dishes and dining room.",
    alternates: { canonical: `${site.url}/gallery` },
};

export default function Page() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Gallery</h1>
            <GalleryClient />
        </main>
    );
}
