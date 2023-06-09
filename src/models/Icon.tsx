export class Icon {
    static nextId = 0;

    iconId: number;
    name: string;
    icon: string;

    constructor(name: string, icon: string) {
        this.name = name;
        this.icon = icon;
        this.iconId = this.getNextId();
    }

    private getNextId() {
        const retval = Icon.nextId;
        Icon.nextId++;
        return retval;
    }
}
