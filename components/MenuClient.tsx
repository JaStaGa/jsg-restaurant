"use client";
import { useEffect, useState } from "react";
import type { MenuSection } from "@/lib/types";
import MenuFilters, { type Filters } from "./MenuFilters";
import MenuList from "./MenuList";

export default function MenuClient({ sections }: { sections: MenuSection[] }) {
    const initial: Filters = (() => {
        if (typeof window === "undefined") return { vegan: false, vegetarian: false, glutenFree: false };
        const sp = new URLSearchParams(window.location.search);
        return {
            vegan: sp.get("vegan") === "true",
            vegetarian: sp.get("vegetarian") === "true",
            glutenFree: sp.get("glutenFree") === "true",
        };
    })();
    const [filters, setFilters] = useState<Filters>(initial);
    const [active, setActive] = useState<string>(sections[0]?.id || "");

    function writeURL(f: Filters) {
        const url = new URL(window.location.href);
        url.searchParams.set("vegan", String(f.vegan));
        url.searchParams.set("vegetarian", String(f.vegetarian));
        url.searchParams.set("glutenFree", String(f.glutenFree));
        history.replaceState(null, "", url);
    }

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                const top = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (top?.target?.id) setActive(top.target.id);
            },
            { rootMargin: "-80px 0px -65% 0px", threshold: [0, 0.2, 0.5, 0.8] }
        );
        sections.forEach(s => {
            const el = document.getElementById(s.id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, [sections]);

    return (
        <>
            <nav className="mx-auto max-w-6xl px-6 my-6 flex flex-wrap gap-2">
                {sections.map(s => (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`px-3 py-1 rounded-full border ${active === s.id ? "bg-burgundy text-cream border-burgundy" : "hover:bg-charcoal/5"
                            }`}
                    >
                        {s.title}
                    </a>
                ))}
            </nav>

            <MenuFilters onChange={(f) => { setFilters(f); writeURL(f); }} />
            <MenuList sections={sections} filters={filters} />
        </>
    );
}
