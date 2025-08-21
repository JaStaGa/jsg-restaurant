"use client";
import { useEffect, useState } from "react";
import data from "@/data/testimonials.json";

type T = { name: string; quote: string };

export default function TestimonialCarousel() {
    const items = data as T[];
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setI(v => (v + 1) % items.length), 4000);
        return () => clearInterval(id);
    }, [items.length]);
    const cur = items[i];
    return (
        <section className="bg-charcoal text-cream">
            <div className="mx-auto max-w-3xl px-6 py-12 text-center">
                <h2 className="text-2xl font-serif">What guests say</h2>
                <p className="mt-4 text-lg">&ldquo;{cur.quote}&rdquo;</p>
                <p className="mt-2 text-sm text-cream/80">— {cur.name}</p>
                <div className="mt-4 flex justify-center gap-2">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Show testimonial ${idx + 1}`}
                            onClick={() => setI(idx)}
                            className={`h-2 w-2 rounded-full ${idx === i ? "bg-cream" : "bg-cream/40"}`}
                        />
                    ))}
                </div>
                <p className="mt-6 text-xs text-cream/70">Demo content</p>
            </div>
        </section>
    );
}
