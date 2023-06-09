import { Icon } from "../Icon";

export const BASE_ICON_TABLE: Icon[] = [
    new Icon("Shield", "bg-shield"),
    new Icon("Armor", "bg-armor"),
    new Icon("Sword", "bg-sword"),
    new Icon("Axe", "bg-axe"),
    new Icon("Spear", "bg-spear"),
    new Icon("Mace", "bg-mace"),
];

export const getIconById = (id: number) => {
    return BASE_ICON_TABLE.find((icon: Icon) => icon.iconId === id);
};

export const getIconByName = (name: string) => {
    return BASE_ICON_TABLE.find((icon: Icon) => icon.name === name);
};
