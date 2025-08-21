"use client";
import { useMemo } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapClient({ center }: { center: { lat: number; lng: number } }) {
    const pos = useMemo<[number, number]>(() => [center.lat, center.lng], [center]);
    return (
        <MapContainer center={pos} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}
