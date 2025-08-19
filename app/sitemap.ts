import { MetadataRoute } from "next";
import { site } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: site.url, lastModified: new Date() },
        { url: `${site.url}/menu`, lastModified: new Date() },
    ];
}