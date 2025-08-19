import specials from "@/data/specials.json";

export default function SpecialsTicker() {
    const items = specials as { label: string; price?: number }[];
    const line = [...items, ...items]; // loop for seamless scroll
    return (
        <div className="bg-burgundy text-cream">
            <div className="overflow-hidden">
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