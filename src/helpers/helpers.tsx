class Helpers {
    static calculateModifier(stat: number) {
        return Math.floor((stat - 10) / 2);
    }

    static formatModifier(modifier: number) {
        return modifier > 0 ? "+" + modifier : "" + modifier;
    }

    static getHpColor = (current: number, max: number) => {
        if (current / max >= 0.8) return "text-green-500";
        if (current / max >= 0.4) return "text-yellow-500";
        return "text-red-500";
    };
}

export default Helpers;
