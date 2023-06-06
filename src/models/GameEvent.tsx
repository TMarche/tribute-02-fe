export class GameEvent {
    static nextId = 0;

    eventId: number;
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.eventId = this.getNextId();
        this.name = name;
        this.description = description;
    }

    private getNextId() {
        const retval = GameEvent.nextId;
        GameEvent.nextId++;
        return retval;
    }
}
