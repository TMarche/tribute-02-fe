export class TributeItem {
    static nextId = 0;

    tributeItemId: number;
    tributeId: number;
    itemId: number;

    constructor(tributeId: number, itemId: number) {
        this.tributeItemId = this.getNextId();
        this.tributeId = tributeId;
        this.itemId = itemId;
    }

    public getNextId() {
        const retval = TributeItem.nextId;
        TributeItem.nextId++;
        return retval;
    }
}
