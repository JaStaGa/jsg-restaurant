export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "../_rate";
import { getTransporter, previewUrl } from "../_mail";

const Schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    date: z.string(),
    time: z.string(),
    partySize: z.number().int().min(1).max(12),
    notes: z.string().optional()
});

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (!rateLimit(`reserve:${ip}`)) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

    const body = await req.json().catch(() => null);
    const parsed = Schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    const t = await getTransporter();
    const info = await t.sendMail({
        from: `"JSG Restaurant" <no-reply@jsg.demo>`,
        to: "reservations@jsg.demo",
        subject: `Reservation request: ${parsed.data.name}`,
        text: JSON.stringify(parsed.data, null, 2)
    });

    return NextResponse.json({ ok: true, previewUrl: previewUrl(info) });
}
