import type { Metadata } from "next";

export const site = {
    name: "JSG Restaurant",
    url: "https://jsg-restaurant.vercel.app",
    description: "Warm neighborhood bistro in your browser. Demo site for portfolio.",
};

export const baseMetadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: `${site.name} · Neighborhood Bistro`,
        template: `%s · ${site.name}`,
    },
    description: site.description,
    openGraph: {
        type: "website",
        url: site.url,
        title: site.name,
        description: site.description,
        images: ["/og-image.png"],
    },
    twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og-image.png"] },
    alternates: { canonical: site.url },
};