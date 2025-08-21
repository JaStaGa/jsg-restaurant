"use client";
import Image from "next/image";
import { useState } from "react";

const files = Array.from({ length: 12 }, (_, i) => `/images/gallery/${i + 1}.png`);

export default function Page() {
    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState<string | null>(null);

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Gallery</h1>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {files.map(p => (
                    <li key={p}>
                        <button
                            className="block overflow-hidden rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy/40"
                            onClick={() => { setSrc(p); setOpen(true); }}
                        >
                            <Image src={p} alt="Dining room or dish" width={600} height={400}
                                className="aspect-[3/2] object-cover transition-transform hover:scale-[1.02]" />
                        </button>
                    </li>
                ))}
            </ul>

            {open && src && (
                <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center"
                    onClick={() => setOpen(false)}>
                    <Image src={src} alt="" width={1200} height={800} className="max-h-[85vh] w-auto rounded-lg object-contain" />
                </div>
            )}
        </main>
    );
}
