import type { Metadata } from "next";
import sectionsData from "@/data/menu.json";
import type { MenuSection } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/seo";
import MenuClient from "@/components/MenuClient";

export const metadata: Metadata = {
    title: "Menu",
    alternates: { canonical: `${site.url}/menu` },
};

export default function Page() {
    const sections = sectionsData as MenuSection[];
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Menu",
        name: "JSG Restaurant Menu",
        hasMenuSection: sections.map(s => ({
            "@type": "MenuSection",
            name: s.title,
            hasMenuItem: s.items.map(i => ({
                "@type": "MenuItem",
                name: i.name,
                offers: { "@type": "Offer", price: i.price }
            }))
        }))
    };

    return (
        <main>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/menu", label: "Menu" }]} />
            <MenuClient sections={sections} />
            <JsonLd json={jsonLd} />
        </main>
    );
}
