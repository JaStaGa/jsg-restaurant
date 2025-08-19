"use client";
import { z } from "zod";
import { toast } from "sonner";

const Schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(5)
});

export default function Page() {
    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const data = Object.fromEntries(fd.entries());
        const parsed = Schema.safeParse(data);
        if (!parsed.success) { toast.error("Check form fields."); return; }
        const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(parsed.data) });
        const json = await res.json();
        if (res.ok) { toast.success("Message sent."); e.currentTarget.reset(); console.log("Preview:", json.previewUrl); }
        else { toast.error(json.error || "Request failed."); }
    }
    return (
        <main className="mx-auto max-w-2xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Contact</h1>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <input name="name" placeholder="Name" className="border p-3 rounded" required />
                <input name="email" type="email" placeholder="Email" className="border p-3 rounded" required />
                <textarea name="message" placeholder="Message" className="border p-3 rounded min-h-28" required />
                <button className="px-5 py-3 rounded-md bg-burgundy text-cream">Send</button>
            </form>
        </main>
    );
}
