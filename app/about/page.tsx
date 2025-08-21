import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import HoursTable from "@/components/HoursTable";
import MapEmbed from "@/components/MapEmbed";
import locationData from "@/data/location.json";
import hoursData from "@/data/hours.json";

type Location = { lat: number; lng: number; address: string };
type HoursRow = { day: string; opens: string; closes: string };

export const metadata: Metadata = { title: "About · Hours & Location" };

export default function Page() {
    const location = locationData as Location;
    const hours = hoursData as HoursRow[];

    const openingHoursSpecification = hours.map(h => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.opens,
        closes: h.closes,
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "JSG Restaurant",
        address: { "@type": "PostalAddress", streetAddress: location.address },
        openingHoursSpecification,
    };

    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            <h1 className="text-3xl font-serif text-burgundy">Our Story, Hours, and Location</h1>
            <p className="mt-4 max-w-2xl">
                A warm, modern neighborhood bistro serving seasonal plates and good energy.
            </p>

            <section className="mt-8">
                <h2 className="text-xl font-serif text-burgundy">Hours</h2>
                <HoursTable />
            </section>

            <section className="mt-10">
                <h2 className="text-xl font-serif text-burgundy">Find us</h2>
                <p className="mt-2">{location.address}</p>
                <MapEmbed center={{ lat: location.lat, lng: location.lng }} />
            </section>

            <JsonLd json={jsonLd} />
        </main>
    );
}
