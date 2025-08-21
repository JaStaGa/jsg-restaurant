"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

export default function MapEmbed({ center }: { center: { lat: number; lng: number } }) {
    const pos = useMemo<LatLngExpression>(() => [center.lat, center.lng], [center]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="mt-8 h-64 rounded-lg overflow-hidden border bg-charcoal/5" />;

    return (
        <div className="mt-8 h-64 rounded-lg overflow-hidden border">
            <MapContainer center={pos} zoom={15} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </div>
    );
}
