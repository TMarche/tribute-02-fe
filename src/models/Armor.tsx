import { Item } from "./Item";

export enum ArmorType {
    Light,
    Medium,
    Heavy,
}

export class Armor extends Item {
    ac: number;
    armorType: ArmorType;

    constructor(name: string, ac: number, armorType: ArmorType) {
        super(name);
        this.ac = ac;
        this.armorType = armorType;
    }
}
