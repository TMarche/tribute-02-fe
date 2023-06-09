import { Item } from "./Item";

export class Shield extends Item {
    acBonus: number;

    constructor(name: string, acBonus: number) {
        super(name);
        this.acBonus = acBonus;
    }
}
