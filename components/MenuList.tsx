"use client";
import type { MenuSection, MenuItem } from "@/lib/types";

function matchFlags(item: MenuItem, f: { vegan?: boolean; vegetarian?: boolean; glutenFree?: boolean }) {
    const flags = item.flags || {};
    if (f.vegan && !flags.vegan) return false;
    if (f.vegetarian && !flags.vegetarian) return false;
    if (f.glutenFree && !flags.glutenFree) return false;
    return true;
}

export default function MenuList({ sections, filters }: { sections: MenuSection[]; filters: { vegan: boolean; vegetarian: boolean; glutenFree: boolean } }) {
    return (
        <div className="mx-auto max-w-6xl px-6">
            <nav className="my-6 flex flex-wrap gap-2">
                {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="px-3 py-1 rounded-full border hover:bg-charcoal/5">{s.title}</a>
                ))}
            </nav>
            <div className="space-y-10">
                {sections.map(section => (
                    <section id={section.id} key={section.id} className="scroll-mt-24">
                        <h2 className="text-2xl font-serif text-burgundy">{section.title}</h2>
                        <ul className="mt-4 divide-y">
                            {section.items.filter(i => matchFlags(i, filters)).map(item => (
                                <li key={item.id} className="py-3 flex items-start justify-between gap-6">
                                    <div>
                                        <div className="font-medium">{item.name}</div>
                                        {item.description && <p className="text-sm text-charcoal/70">{item.description}</p>}
                                        {item.flags && (
                                            <div className="mt-1 flex gap-2 text-xs text-charcoal/70">
                                                {item.flags.vegan && <span>Vegan</span>}
                                                {item.flags.vegetarian && <span>Vegetarian</span>}
                                                {item.flags.glutenFree && <span>GF</span>}
                                                {item.flags.spicy && <span>Spicy</span>}
                                            </div>
                                        )}
                                    </div>
                                    <div className="min-w-[3rem] text-right font-medium">${" "}{item.price.toFixed(0)}</div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}