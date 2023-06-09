import { Item } from "./Item";

export enum Handedness {
    One,
    Two,
}

export class Weapon extends Item {
    damageDice: string;
    handedness: Handedness;

    constructor(name: string, damageDice: string, handedness: Handedness) {
        super(name);
        this.damageDice = damageDice;
        this.handedness = handedness;
    }
}
