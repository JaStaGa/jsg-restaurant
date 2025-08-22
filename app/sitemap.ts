import { MetadataRoute } from "next";
import { site } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        { url: site.url, lastModified: now },
        { url: `${site.url}/menu`, lastModified: now },
        { url: `${site.url}/about`, lastModified: now },
        { url: `${site.url}/reserve`, lastModified: now },
        { url: `${site.url}/contact`, lastModified: now },
        { url: `${site.url}/gallery`, lastModified: now },
        { url: `${site.url}/faq`, lastModified: now },
    ];
}
