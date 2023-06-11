import { Armor } from "../models/Armor";
import { Item } from "../models/Item";
import { Shield } from "../models/Shield";
import { Tribute } from "../models/Tribute";
import { Handedness, Weapon } from "../models/Weapon";
import { getArmorTypeById } from "../models/tables/BaseArmorTypes";

class Helpers {
    static BASE_AC = 10;
    static BASE_STAT = 10;
    static MAX_STAT = 20;
    static MAX_DEX_BONUS = 5;

    static calculateModifier(stat: number) {
        return Math.floor((stat - this.BASE_STAT) / 2);
    }

    static formatModifier(modifier: number) {
        return modifier >= 0 ? "+" + modifier : "" + modifier;
    }

    static getHpColor = (current: number, max: number) => {
        if (current / max >= 0.8) return "text-green-500";
        if (current / max >= 0.4) return "text-yellow-500";
        return "text-red-500";
    };

    static calculateAC = (tribute: Tribute, items: Item[]) => {
        const weapon: Weapon = items.find(
            (item) => item.itemId === tribute.weaponId
        ) as Weapon;
        const shield: Shield = items.find(
            (item) => item.itemId === tribute.shieldId
        ) as Shield;
        const armor: Armor = items.find(
            (item) => item.itemId === tribute.armorId
        ) as Armor;

        // TODO: Needs to account for CON on Barbarian when not using armor is preferable
        return (
            Math.max(this.BASE_AC, armor.ac) +
            Math.min(
                this.calculateModifier(tribute.dex),
                getArmorTypeById(armor.armorTypeId)?.maxDexBonus ||
                    this.MAX_DEX_BONUS
            ) +
            (weapon.handedness === Handedness.One ? shield.acBonus : 0)
        );
    };
}

export default Helpers;
