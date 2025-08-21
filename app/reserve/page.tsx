"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const Schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    date: z.string(),
    time: z.string(),
    partySize: z.coerce.number().int().min(1).max(12),
    notes: z.string().optional(),
    hp: z.string().optional() // honeypot
});

export default function Page() {
    const [preview, setPreview] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const obj = Object.fromEntries(fd.entries());
        const parsed = Schema.safeParse(obj);
        if (!parsed.success) { toast.error("Check form fields."); return; }
        if (parsed.data.hp) { toast.error("Spam detected."); return; }

        const res = await fetch("/api/reserve", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(parsed.data)
        });
        const json = await res.json();
        if (res.ok) { toast.success("Request sent."); setPreview(json.previewUrl ?? null); e.currentTarget.reset(); }
        else { toast.error(json.error || "Request failed."); }
    }

    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Reserve</h1>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <input name="name" placeholder="Name" className="border p-3 rounded" required />
                <input name="email" type="email" placeholder="Email" className="border p-3 rounded" required />
                <input name="phone" placeholder="Phone" className="border p-3 rounded" required />
                <div className="grid grid-cols-2 gap-4">
                    <input name="date" type="date" className="border p-3 rounded" required />
                    <input name="time" type="time" className="border p-3 rounded" required />
                </div>
                <input name="partySize" type="number" min={1} max={12} placeholder="Party size" className="border p-3 rounded" required />
                <textarea name="notes" placeholder="Notes (optional)" className="border p-3 rounded min-h-28" />
                <input name="hp" className="hidden" tabIndex={-1} aria-hidden="true" />
                <button className="px-5 py-3 rounded-md bg-burgundy text-cream">Submit</button>
            </form>
            {preview && (
                <p className="mt-4 text-sm">
                    Ethereal preview: <a className="underline" href={preview} target="_blank" rel="noopener">open</a>
                </p>
            )}
        </main>
    );
}
