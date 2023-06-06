class Helpers {
    static calculateModifier(stat: number) {
        return Math.floor((stat - 10) / 2);
    }

    static formatModifier(modifier: number) {
        return modifier > 0 ? "+" + modifier : "" + modifier;
    }
}

export default Helpers;
