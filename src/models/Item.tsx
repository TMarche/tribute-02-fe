export class Item {
    static nextId = 0;

    itemId: number;
    name: string;
    iconId: number;

    constructor(name: string, iconId: number) {
        this.itemId = this.getNextId();
        this.iconId = iconId;
        this.name = name;
    }

    public getNextId() {
        const retval = Item.nextId;
        Item.nextId++;
        return retval;
    }

    public getJSX() {
        return <div className="flex-1 text-right">INVALID</div>;
    }
}
