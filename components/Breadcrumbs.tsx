import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
    return (
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 py-3 text-sm text-charcoal/70">
            <ol className="flex items-center gap-2">
                {items.map((it, i) => (
                    <li key={it.href} className="flex items-center gap-2">
                        <Link href={it.href} className="hover:text-burgundy">{it.label}</Link>
                        {i < items.length - 1 && <span aria-hidden>›</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
