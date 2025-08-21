import Link from "next/link";

export default function HomeCTAs() {
    return (
        <section className="bg-cream">
            <div className="mx-auto max-w-6xl px-6 py-10 grid gap-4 sm:grid-cols-3">
                <Link href="/reserve" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <h3 className="font-serif text-burgundy text-xl">Reserve</h3>
                    <p className="text-sm mt-1">Book a table in seconds.</p>
                </Link>
                <a href="tel:+17185550123" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <h3 className="font-serif text-burgundy text-xl">Call</h3>
                    <p className="text-sm mt-1">Questions or large parties.</p>
                </a>
                <a href="https://maps.app.goo.gl/" target="_blank" rel="noopener" className="rounded-xl border p-5 shadow-sm transition hover:shadow-md hover:bg-charcoal/5">
                    <h3 className="font-serif text-burgundy text-xl">Directions</h3>
                    <p className="text-sm mt-1">123 Washington St, Boston.</p>
                </a>
            </div>
        </section>
    );
}
