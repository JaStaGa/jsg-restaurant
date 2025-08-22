"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const Schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(5),
    hp: z.string().optional(),
});

export default function ContactForm() {
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

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(parsed.data),
            });
            const json = await res.json().catch(() => ({}));
            if (res.ok) {
                toast.success("Message sent.");
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
                    <textarea name="message" placeholder="Message" className="border p-3 rounded min-h-28" required />
                    <input name="hp" className="hidden" tabIndex={-1} aria-hidden="true" />
                    <button disabled={pending} aria-busy={pending} className="px-5 py-3 rounded-md bg-burgundy text-cream">
                        {pending ? "Sending…" : "Send"}
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
