export type MenuItem = {
    id: string;
    name: string;
    description?: string;
    price: number;
    flags?: { vegan?: boolean; vegetarian?: boolean; glutenFree?: boolean; spicy?: boolean };
};

export type MenuSection = { id: string; title: string; items: MenuItem[] };