"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import gallery from "@/data/gallery.json";
import sectionsData from "@/data/menu.json";
import type { MenuSection } from "@/lib/types";

type G = { src: string; alt: string; itemId?: string; kind?: "dish" | "room" };

const files = gallery as G[];
const sections = sectionsData as MenuSection[];

// id → { name, price, sectionId }
const menuMap = new Map<string, { name: string; price: number; sectionId: string }>();
sections.forEach(s => s.items.forEach(i => menuMap.set(i.id, { name: i.name, price: i.price, sectionId: s.id })));

export default function GalleryClient() {
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    const cur = files[idx];
    const meta = cur.itemId ? menuMap.get(cur.itemId) : undefined;
    const caption = meta ? `${meta.name} · $${meta.price.toFixed(0)}` : cur.alt;
    const anchor = meta ? `/menu#${meta.sectionId}-${cur.itemId}` : undefined;

    // keyboard nav in lightbox
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
            if (e.key === "ArrowRight") setIdx(i => (i + 1) % files.length);
            if (e.key === "ArrowLeft") setIdx(i => (i - 1 + files.length) % files.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {files.map((g, i) => {
                    const m = g.itemId ? menuMap.get(g.itemId) : undefined;
                    const label = m ? m.name : g.alt;
                    return (
                        <li key={g.src}>
                            <button
                                aria-label={`Open ${label}`}
                                className="group relative block overflow-hidden rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40"
                                onClick={() => { setIdx(i); setOpen(true); }}
                            >
                                <Image
                                    src={g.src}
                                    alt={g.alt}
                                    width={600}
                                    height={400}
                                    sizes="(min-width:640px) 33vw, 50vw"
                                    className="aspect-[3/2] object-cover transition-transform group-hover:scale-[1.02]"
                                />
                                {/* hover/focus caption */}
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-2 sm:p-3 text-cream opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity">
                                    <div className="text-sm leading-tight">
                                        {m ? m.name : g.alt}{m && <span className="ml-2 opacity-90">${m.price.toFixed(0)}</span>}
                                    </div>
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ul>

            {open && (
                <div
                    role="dialog"
                    aria-modal
                    className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div className="relative" onClick={e => e.stopPropagation()}>
                        <Image
                            src={cur.src}
                            alt=""
                            width={1200}
                            height={800}
                            className="max-h-[85vh] w-auto rounded-lg object-contain"
                            sizes="100vw"
                        />
                        <div className="mt-2 text-center text-cream">{caption}</div>
                        <div className="mt-3 flex justify-center gap-3">
                            <button className="px-3 py-1.5 rounded bg-cream text-charcoal" onClick={() => setIdx((idx - 1 + files.length) % files.length)}>Prev</button>
                            {anchor && <a className="px-3 py-1.5 rounded bg-burgundy text-cream" href={anchor}>View on Menu</a>}
                            <button className="px-3 py-1.5 rounded bg-cream text-charcoal" onClick={() => setIdx((idx + 1) % files.length)}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
