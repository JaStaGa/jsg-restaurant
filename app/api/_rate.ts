export type RateLimitOptions = { limit?: number; windowMs?: number };

type Rec = { count: number; ts: number };
const store = new Map<string, Rec>();

export function rateLimit(
    key: string,
    { limit = 5, windowMs = 60_000 }: RateLimitOptions = {}
) {
    const now = Date.now();
    const rec = store.get(key);
    if (!rec || now - rec.ts > windowMs) {
        store.set(key, { count: 1, ts: now });
        return true;
    }
    if (rec.count >= limit) return false;
    rec.count++;
    return true;
}
