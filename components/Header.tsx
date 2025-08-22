"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const p = usePathname();
    const links = [
        { href: "/menu", label: "Menu" },
        { href: "/reserve", label: "Reserve" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
    ];
    return (
        <header className="bg-cream/90 backdrop-blur border-b sticky top-0 z-40">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                <Link href="/" className="font-serif text-burgundy text-lg">JSG Restaurant</Link>
                <nav aria-label="Primary" className="flex gap-5 text-sm overflow-x-auto">
                    {links.map(l => {
                        const active = p === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                aria-current={active ? "page" : undefined}
                                className={`relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40 ${active ? "text-burgundy" : "hover:text-burgundy"
                                    }`}
                            >
                                {l.label}
                                {active && <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-burgundy" />}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
