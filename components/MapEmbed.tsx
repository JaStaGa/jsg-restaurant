"use client";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), { ssr: false });

export default function MapEmbed({ center }: { center: { lat: number; lng: number } }) {
    return (
        <div className="mt-8 h-64 rounded-lg overflow-hidden border">
            <MapClient center={center} />
        </div>
    );
}
