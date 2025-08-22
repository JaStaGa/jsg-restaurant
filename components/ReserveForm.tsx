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
    hp: z.string().optional(),
});

export default function ReserveForm() {
    const [preview, setPreview] = useState<string | null>(null);
    const [pending, setPending] = useState(false);
    const [formKey, setFormKey] = useState(0);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (pending) return;
        setPending(true);
        const form = e.currentTarget;
        try {
            const fd = new FormData(form);
            const obj = Object.fromEntries(fd.entries());
            const parsed = Schema.safeParse(obj);
            if (!parsed.success) { toast.error("Check form fields."); return; }
            if (parsed.data.hp) return;

            const res = await fetch("/api/reserve", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(parsed.data),
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok) {
                toast.success("Request sent.");
                setPreview(json.previewUrl ?? null);
                form.reset();
                setFormKey(k => k + 1);
            } else {
                toast.error(json.error || "Request failed.");
            }
        } finally {
            setPending(false);
        }
    }

    return (
        <>
            <form key={formKey} onSubmit={onSubmit} className="mt-6">
                <fieldset disabled={pending} className="grid gap-4">
                    <input name="name" placeholder="Name" className="border p-3 rounded" required />
                    <input name="email" type="email" placeholder="Email" className="border p-3 rounded" required />
                    <input name="phone" placeholder="Phone" className="border p-3 rounded" required />
                    <div className="grid grid-cols-2 gap-4">
                        <input name="date" type="date" placeholder="Date" className="border p-3 rounded" required />
                        <input name="time" type="time" placeholder="Time" className="border p-3 rounded" required />
                    </div>
                    <input name="partySize" type="number" min={1} max={12} placeholder="Party size" className="border p-3 rounded" required />
                    <textarea name="notes" placeholder="Notes (optional)" className="border p-3 rounded min-h-28" />
                    <input name="hp" className="hidden" tabIndex={-1} aria-hidden="true" />
                    <button disabled={pending} aria-busy={pending} className="px-5 py-3 rounded-md bg-burgundy text-cream">
                        {pending ? "Submitting…" : "Submit"}
                    </button>
                </fieldset>
            </form>
            {preview && (
                <p className="mt-4 text-sm">
                    Ethereal preview: <a className="underline" href={preview} target="_blank" rel="noopener">open</a>
                </p>
            )}
        </>
    );
}
