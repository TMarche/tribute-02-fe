import { Armor } from "../Armor";
import { Item } from "../Item";
import { Shield } from "../Shield";
import { Handedness, Weapon } from "../Weapon";
import { getArmorTypeByName } from "./BaseArmorTypes";
import { getIconByName } from "./BaseIcons";

export const BASE_ARMOR_TABLE: Armor[] = [
    new Armor(
        "Leather Armor",
        getIconByName("Armor")?.iconId || 0,
        11,
        getArmorTypeByName("Light")?.armorTypeId || 0
    ),
    new Armor(
        "Studded Leather Armor",
        getIconByName("Armor")?.iconId || 0,
        12,
        getArmorTypeByName("Light")?.armorTypeId || 0
    ),
    new Armor(
        "Hide Armor",
        getIconByName("Armor")?.iconId || 0,
        12,
        getArmorTypeByName("Medium")?.armorTypeId || 0
    ),
    new Armor(
        "Chain Shirt",
        getIconByName("Armor")?.iconId || 0,
        13,
        getArmorTypeByName("Medium")?.armorTypeId || 0
    ),
    new Armor(
        "Breastplate",
        getIconByName("Armor")?.iconId || 0,
        14,
        getArmorTypeByName("Medium")?.armorTypeId || 0
    ),
    new Armor(
        "Half Plate",
        getIconByName("Armor")?.iconId || 0,
        15,
        getArmorTypeByName("Medium")?.armorTypeId || 0
    ),
    new Armor(
        "Ring Mail",
        getIconByName("Armor")?.iconId || 0,
        14,
        getArmorTypeByName("Heavy")?.armorTypeId || 0
    ),
    new Armor(
        "Chain Mail",
        getIconByName("Armor")?.iconId || 0,
        16,
        getArmorTypeByName("Heavy")?.armorTypeId || 0
    ),
    new Armor(
        "Splint Armor",
        getIconByName("Armor")?.iconId || 0,
        17,
        getArmorTypeByName("Heavy")?.armorTypeId || 0
    ),
    new Armor(
        "Plate Armor",
        getIconByName("Armor")?.iconId || 0,
        18,
        getArmorTypeByName("Heavy")?.armorTypeId || 0
    ),
];

export const BASE_SHIELD_TABLE: Shield[] = [
    new Shield("Leather Shield", getIconByName("Shield")?.iconId || 0, 1),
    new Shield("Iron Shield", getIconByName("Shield")?.iconId || 0, 2),
    new Shield("Steel Shield", getIconByName("Shield")?.iconId || 0, 3),
];

export const BASE_WEAPON_TABLE: Weapon[] = [
    new Weapon(
        "Club",
        getIconByName("Mace")?.iconId || 0,
        "1d4",
        Handedness.One
    ),
    new Weapon(
        "Dagger",
        getIconByName("Sword")?.iconId || 0,
        "1d4",
        Handedness.One
    ),
    new Weapon(
        "Quarterstaff",
        getIconByName("Mace")?.iconId || 0,
        "1d6",
        Handedness.One
    ),
    new Weapon(
        "Longsword",
        getIconByName("Sword")?.iconId || 0,
        "1d8",
        Handedness.One
    ),
    new Weapon(
        "Battleaxe",
        getIconByName("Axe")?.iconId || 0,
        "1d8",
        Handedness.One
    ),
    new Weapon(
        "Greatsword",
        getIconByName("Sword")?.iconId || 0,
        "2d6",
        Handedness.Two
    ),
    new Weapon(
        "Maul",
        getIconByName("Mace")?.iconId || 0,
        "2d6",
        Handedness.One
    ),
    new Weapon(
        "Greataxe",
        getIconByName("Axe")?.iconId || 0,
        "1d12",
        Handedness.One
    ),
];

export const BASE_ITEMS_TABLE: Item[] = [
    ...BASE_ARMOR_TABLE,
    ...BASE_SHIELD_TABLE,
    ...BASE_WEAPON_TABLE,
];
