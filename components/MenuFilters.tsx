"use client";
import { useState } from "react";

export type Filters = { vegan: boolean; vegetarian: boolean; glutenFree: boolean };

export default function MenuFilters({ onChange }: { onChange: (f: Filters) => void }) {
    const [f, setF] = useState<Filters>({ vegan: false, vegetarian: false, glutenFree: false });
    function toggle(k: keyof Filters) { const n = { ...f, [k]: !f[k] }; setF(n); onChange(n); }
    return (
        <div className="sticky top-0 z-10 bg-cream/90 backdrop-blur border-b py-3">
            <div className="mx-auto max-w-6xl px-6 flex items-center gap-4 text-sm">
                <span className="font-medium">Filters:</span>
                {(["vegan", "vegetarian", "glutenFree"] as const).map(k => (
                    <button key={k} onClick={() => toggle(k)} aria-pressed={f[k]} className={`px-3 py-1 rounded-full border ${f[k] ? "bg-burgundy text-cream border-burgundy" : "hover:bg-charcoal/5"}`}>
                        {k === "glutenFree" ? "Gluten‑free" : k[0].toUpperCase() + k.slice(1)}
                    </button>
                ))}
                <div className="ml-auto text-xs text-charcoal/70">Tap to toggle</div>
            </div>
        </div>
    );
}