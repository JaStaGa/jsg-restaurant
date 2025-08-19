import Link from "next/link";

export default function StickyActionBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-charcoal/95 backdrop-blur text-cream">
            <nav className="mx-auto max-w-6xl grid grid-cols-3 text-center">
                <a href="tel:+17185550123" className="p-3">Call</a>
                <Link href="/reserve" className="p-3 bg-burgundy">Reserve</Link>
                <a href="https://maps.app.goo.gl/" target="_blank" className="p-3">Directions</a>
            </nav>
        </div>
    );
}