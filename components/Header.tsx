"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const p = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/menu", label: "Menu" },
        { href: "/reserve", label: "Reserve" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
    ];

    // Close menu when route changes
    useEffect(() => { setOpen(false); }, [p]);

    return (
        <header className="bg-cream/95 backdrop-blur border-b sticky top-0 z-40">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                <Link href="/" className="font-serif text-burgundy text-lg font-bold text-shadow-2xs">
                    JSG Restaurant
                </Link>

                {/* Desktop nav */}
                <nav aria-label="Primary" className="hidden md:flex gap-5 text-sm font-bold">
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

                {/* Mobile toggle */}
                <button
                    type="button"
                    className="md:hidden p-2 rounded border focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40"
                    aria-label="Toggle menu"
                    aria-controls="mobile-nav"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    {/* Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile panel */}
            {open && (
                <div id="mobile-nav" className="md:hidden border-t bg-cream/98 backdrop-blur font-bold text-shadow-strong-white">
                    <nav aria-label="Mobile" className="mx-auto max-w-6xl px-6 py-3 grid gap-1 text-sm">
                        {links.map(l => {
                            const active = p === l.href;
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`block py-2 ${active ? "text-burgundy font-medium" : "hover:text-burgundy"}`}
                                >
                                    {l.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
