import Link from "next/link";
import loc from "@/data/location.json";

type Location = { lat: number; lng: number; address: string };
const location = loc as Location;
const dest = `${location.lat},${location.lng}`;
const mapHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;

export default function StickyActionBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-charcoal/95 backdrop-blur text-cream">
            <nav className="mx-auto max-w-6xl grid grid-cols-3 text-center">
                <a href="tel:+19175245650" className="p-3 font-medium text-shadow-strong text-stroke">Call</a>
                <Link href="/reserve" className="p-3 bg-burgundy font-medium text-shadow-strong text-stroke">Reserve</Link>
                <a href={mapHref} target="_blank" rel="noopener" className="p-3 font-medium text-shadow-strong text-stroke">Directions</a>
            </nav>
        </div>
    );
}
