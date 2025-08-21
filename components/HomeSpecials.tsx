import specials from "@/data/specials.json";

export default function HomeSpecials() {
    const items = (specials as { label: string; price?: number }[]).slice(0, 3);
    return (
        <section className="bg-charcoal text-cream">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <h2 className="text-2xl font-serif">Today’s Specials</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                    {items.map((s, i) => (
                        <li key={i} className="rounded-lg border border-cream/20 p-4">
                            <span className="block">{s.label}</span>
                            {"price" in s && typeof s.price === "number" && (
                                <span className="text-sm text-cream/80">${s.price.toFixed(2)}</span>
                            )}
                        </li>
                    ))}
                </ul>
                <a href="/menu" className="inline-block mt-6 underline">View full menu</a>
            </div>
        </section>
    );
}
