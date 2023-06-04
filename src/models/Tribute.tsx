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

    constructor(name: string) {
        this.tributeId = this.getNextId();
        this.name = name;
        this.str = Math.floor(Math.random() * 15) + 5;
        this.dex = Math.floor(Math.random() * 15) + 5;
        this.con = Math.floor(Math.random() * 15) + 5;
        this.int = Math.floor(Math.random() * 15) + 5;
        this.wis = Math.floor(Math.random() * 15) + 5;
        this.cha = Math.floor(Math.random() * 15) + 5;
    }

    private getNextId() {
        const retval = Tribute.nextId;
        Tribute.nextId++;
        return retval;
    }
}
