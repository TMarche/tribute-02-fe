import { Item } from "./Item";
import { getArmorTypeById } from "./tables/BaseArmorTypes";

export class Armor extends Item {
    ac: number;
    armorTypeId: number;

    constructor(name: string, iconId: number, ac: number, armorTypeId: number) {
        super(name, iconId);
        this.ac = ac;
        this.armorTypeId = armorTypeId;
    }

    override getJSX() {
        const determineACString = () => {
            const maxDexBonus = getArmorTypeById(this.armorTypeId)?.maxDexBonus;
            if (maxDexBonus === 0) {
                return `AC: ${this.ac}`;
            } else {
                return `AC: ${this.ac} + Dex modifier (max ${maxDexBonus})`;
            }
        };

        return (
            <>
                <div className="flex-1 text-left flex flex-row items-center">
                    {this.name} ({getArmorTypeById(this.armorTypeId)?.name})
                </div>
                <div className="flex-1 text-left flex flex-row items-center">
                    {determineACString()}
                </div>
            </>
        );
    }
}
