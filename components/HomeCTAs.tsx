import Link from "next/link";
import loc from "@/data/location.json";

type Location = { lat: number; lng: number; address: string };
const location = loc as Location;
const dest = `${location.lat},${location.lng}`;
const mapHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;

export default function HomeCTAs() {
    return (
        <section className="hidden md:block bg-cream">
            <div className="mx-auto max-w-6xl px-6 py-10 grid gap-4 sm:grid-cols-3">
                <Link href="/reserve" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <h3 className="font-serif text-burgundy text-xl">Reserve</h3>
                    <p className="text-sm mt-1">Book a table in seconds.</p>
                </Link>
                <a href="tel:+19175245650" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <h3 className="font-serif text-burgundy text-xl">Call</h3>
                    <p className="text-sm mt-1">Questions or large parties.</p>
                </a>
                <a href={mapHref} target="_blank" rel="noopener" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <div className="font-serif text-burgundy text-lg">Directions</div>
                    <p className="text-sm mt-1">{location.address}</p>
                </a>
            </div>
        </section>
    );
}
