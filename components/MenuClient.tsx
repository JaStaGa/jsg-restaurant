"use client";

import { useState } from "react";
import type { MenuSection } from "@/lib/types";
import MenuFilters, { Filters } from "./MenuFilters";
import MenuList from "./MenuList";

export default function MenuClient({ sections }: { sections: MenuSection[] }) {
    const [filters, setFilters] = useState<Filters>({ vegan: false, vegetarian: false, glutenFree: false });

    function handleChange(f: Filters) {
        setFilters(f);
        const url = new URL(window.location.href);
        url.searchParams.set("vegan", String(f.vegan));
        url.searchParams.set("vegetarian", String(f.vegetarian));
        url.searchParams.set("glutenFree", String(f.glutenFree));
        history.replaceState(null, "", url);
    }

    return (
        <>
            <MenuFilters onChange={handleChange} />
            <MenuList sections={sections} filters={filters} />
        </>
    );
}
