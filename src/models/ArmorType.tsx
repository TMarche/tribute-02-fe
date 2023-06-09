export class ArmorType {
    static nextId = 0;

    armorTypeId: number;
    name: string;
    maxDexBonus: number;

    constructor(name: string, maxDexBonus: number) {
        this.armorTypeId = this.getNextId();
        this.name = name;
        this.maxDexBonus = maxDexBonus;
    }

    private getNextId() {
        const retval = ArmorType.nextId;
        ArmorType.nextId++;
        return retval;
    }
}
