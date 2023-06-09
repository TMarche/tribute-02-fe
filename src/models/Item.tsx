export class Item {
    static nextId = 0;

    itemId: number;
    name: string;

    constructor(name: string) {
        this.itemId = this.getNextId();
        this.name = name;
    }

    private getNextId() {
        const retval = Item.nextId;
        Item.nextId++;
        return retval;
    }
}
