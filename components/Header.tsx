import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b">
            <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                <Link href="/" className="font-serif text-burgundy text-lg">JSG Restaurant</Link>
                <nav className="flex gap-5 text-sm overflow-x-auto">
                    <Link href="/menu" className="hover:text-burgundy">Menu</Link>
                    <Link href="/reserve" className="hover:text-burgundy">Reserve</Link>
                    <Link href="/gallery" className="hover:text-burgundy">Gallery</Link>
                    <Link href="/about" className="hover:text-burgundy">About</Link>
                    <Link href="/contact" className="hover:text-burgundy">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
