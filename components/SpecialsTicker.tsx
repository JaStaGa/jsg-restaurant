import specials from "@/data/specials.json";
type Special = { label: string; price?: number };

export default function SpecialsTicker() {
    const items = specials as Special[];
    const line = [...items, ...items];
    return (
        <div className="bg-burgundy text-cream">
            <div className="ticker overflow-hidden">
                <div className="ticker__track py-2">
                    {line.map((s, i) => (
                        <span key={i} className="whitespace-nowrap text-sm tracking-wide">
                            {s.label}{typeof s.price === "number" ? ` · $${s.price.toFixed(2)}` : ""}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
