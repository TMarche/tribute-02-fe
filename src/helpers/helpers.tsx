import { Tribute } from "../models/Tribute";

class Helpers {
    static BASE_AC = 10;
    static BASE_STAT = 10;

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

    static calculateAC = (tribute: Tribute) => {
        // Currently accounts only for dex
        // Needs to account for CON on Barbarian as well as any armor worn
        return this.BASE_AC + this.calculateModifier(tribute.dex);
    };
}

export default Helpers;
