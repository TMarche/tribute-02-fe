import { ArmorType } from "../ArmorType";

export const BASE_ARMOR_TYPES_TABLE = [
    new ArmorType("Light", 5),
    new ArmorType("Medium", 2),
    new ArmorType("Heavy", 0),
];

export const getArmorTypeById = (id: number) => {
    return BASE_ARMOR_TYPES_TABLE.find(
        (armorType: ArmorType) => armorType.armorTypeId === id
    );
};

export const getArmorTypeByName = (name: string) => {
    return BASE_ARMOR_TYPES_TABLE.find(
        (armorType: ArmorType) => armorType.name === name
    );
};
