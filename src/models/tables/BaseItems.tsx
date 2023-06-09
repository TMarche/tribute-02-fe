import { Armor, ArmorType } from "../Armor";
import { Item } from "../Item";
import { Shield } from "../Shield";

export const BASE_ITEMS_TABLE: Item[] = [
    new Armor("Leather", 11, ArmorType.Light),
    new Armor("Studded Leather", 12, ArmorType.Light),
    new Armor("Hide", 12, ArmorType.Medium),
    new Armor("Chain Shirt", 13, ArmorType.Medium),
    new Armor("Breastplate", 14, ArmorType.Medium),
    new Armor("Half Plate", 15, ArmorType.Medium),
    new Armor("Ring Mail", 14, ArmorType.Heavy),
    new Armor("Chain Mail", 16, ArmorType.Heavy),
    new Armor("Splint", 17, ArmorType.Heavy),
    new Armor("Plate", 18, ArmorType.Heavy),
    new Shield("Leather Shield", 1),
    new Shield("Iron Shield", 2),
    new Shield("Steel Shield", 3),
];
