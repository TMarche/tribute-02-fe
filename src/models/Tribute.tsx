import { faker } from "@faker-js/faker";

export class Tribute {
    static nextId = 0;

    tributeId: number;
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
    image: string;

    constructor(name: string) {
        this.tributeId = this.getNextId();
        this.name = name;
        this.level = Math.ceil(Math.random() * 10);
        this.str = Math.ceil(Math.random() * 15) + 5;
        this.dex = Math.ceil(Math.random() * 15) + 5;
        this.con = Math.ceil(Math.random() * 15) + 5;
        this.int = Math.ceil(Math.random() * 15) + 5;
        this.wis = Math.ceil(Math.random() * 15) + 5;
        this.cha = Math.ceil(Math.random() * 15) + 5;
        this.maxHp = this.calculateMaxHp(this.level, this.con);
        this.currentHp = Math.ceil(Math.random() * this.maxHp);
        this.image = faker.image.avatar();
    }

    private getNextId() {
        const retval = Tribute.nextId;
        Tribute.nextId++;
        return retval;
    }

    private calculateMaxHp(level: number, con: number) {
        // Roll 1d10 + con 'level' times
        let hp = 0;
        for (let i = 0; i < level; i++) {
            hp += Math.random() * 10 + con;
        }
        return hp;
    }
}
