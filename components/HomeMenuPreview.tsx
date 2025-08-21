import sections from "@/data/menu.json";
import type { MenuSection, MenuItem } from "@/lib/types";

function flat(items: MenuSection[]) {
    const out: MenuItem[] = [];
    for (const s of items) for (const it of s.items) out.push({ ...it, id: `${s.id}-${it.id}` });
    return out.slice(0, 6);
}

export default function HomeMenuPreview() {
    const list = flat(sections as MenuSection[]);
    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <h2 className="text-2xl font-serif text-burgundy">Popular Dishes</h2>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {list.map(i => (
                        <li key={i.id} className="flex items-start justify-between gap-6 rounded-lg border p-4">
                            <div>
                                <div className="font-medium">{i.name}</div>
                                {i.flags && (
                                    <div className="mt-1 text-xs text-charcoal/70 flex gap-2">
                                        {i.flags.vegan && <span>Vegan</span>}
                                        {i.flags.vegetarian && <span>Vegetarian</span>}
                                        {i.flags.glutenFree && <span>GF</span>}
                                    </div>
                                )}
                            </div>
                            <div className="min-w-[3rem] text-right font-medium">${i.price.toFixed(0)}</div>
                        </li>
                    ))}
                </ul>
                <a href="/menu" className="inline-block mt-6 underline">See the menu</a>
            </div>
        </section>
    );
}
