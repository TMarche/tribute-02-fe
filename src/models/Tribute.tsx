import { faker } from "@faker-js/faker";
import { TRIBUTE_CLASS_TABLE, getClassById } from "./tables/Classes";
import { DiceRoller } from "dice-roller-parser";

export class Tribute {
    static nextId = 0;
    static STAT_DICE = "4d6kh3";
    static LEVEL_DICE = "4d6kh3";

    tributeId: number;
    classId: number;
    name: string;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    maxHp: number;
    currentHp: number;
    level: number;
    movement: number;
    image: string;
    weaponId: number;
    armorId: number;
    shieldId: number;

    constructor(name: string) {
        const diceRoller = new DiceRoller();
        this.tributeId = this.getNextId();
        this.classId = Math.floor(Math.random() * TRIBUTE_CLASS_TABLE.length);
        this.name = name;
        this.level = diceRoller.rollValue(Tribute.LEVEL_DICE);
        this.str = diceRoller.rollValue(Tribute.STAT_DICE);
        this.dex = diceRoller.rollValue(Tribute.STAT_DICE);
        this.con = diceRoller.rollValue(Tribute.STAT_DICE);
        this.int = diceRoller.rollValue(Tribute.STAT_DICE);
        this.wis = diceRoller.rollValue(Tribute.STAT_DICE);
        this.cha = diceRoller.rollValue(Tribute.STAT_DICE);
        this.maxHp = this.calculateMaxHp(this.level, this.classId, this.con);
        this.currentHp = this.maxHp;
        this.movement = Math.ceil(Math.random() * 3) + 2;
        this.image = faker.image.avatar();
        this.weaponId = 0;
        this.armorId = 0;
        this.shieldId = 0;
    }

    public getNextId() {
        const retval = Tribute.nextId;
        Tribute.nextId++;
        return retval;
    }

    private calculateModifier(stat: number) {
        return Math.floor((stat - 10) / 2);
    }

    private calculateMaxHp(level: number, classId: number, con: number) {
        const diceRoller = new DiceRoller();
        let hitDie = getClassById(classId)?.hitDie;
        if (hitDie === undefined) hitDie = "1d10";

        let hp = 0;
        for (let i = 0; i < level; i++) {
            hp += diceRoller.rollValue(hitDie) + this.calculateModifier(con);
        }
        return hp;
    }
}
